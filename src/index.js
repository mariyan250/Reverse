// React
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// Router
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// Routes
import { routes } from 'shared/constants/routes';

// Redux
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { RootReducer } from 'store/reducers/root';

// i18n
import './i18n';

// Styles
import './index.scss';

// Screens
import LoadingOverlay from 'react-loading-overlay';
import HomePublic from 'screens/Home/Public';
import HomePrivate from 'screens/Home/Private';
import Login from 'screens/Login';
import Register from 'screens/Register';
import NotFound from 'screens/NotFound';
import SearchProduct from 'screens/SearchProduct';
import Product from 'screens/Product';

const initialState = {};
const history = createBrowserHistory();

export const configureStore = (preloadedState) => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    RootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history))),
  );
};

ReactDOM.render(
  <Suspense
    fallback={
      <LoadingOverlay
        active={true}
        spinner={true}
        styles={{
          wrapper: {
            height: '100vh',
          },
        }}
      />
    }
  >
    <Provider store={configureStore(initialState)}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={routes.search} component={SearchProduct} />
          <Route path={routes.item} component={Product} />
          <Route path={routes.dashboard} component={HomePrivate} />
          <Route path={routes.login} component={Login} />
          <Route path={routes.register} component={Register} />
          <Route exact path={routes.home} component={HomePublic} />
          <Route path="*" component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);
