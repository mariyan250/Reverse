// React
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// Router
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// Redux
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { RootReducer } from './store/reducers/root-reducer';

// i18n
import './i18n';

// Styles
import './index.scss';

// Screens
import LoadingOverlay from 'react-loading-overlay';
import Home from 'screens/Home/Public';
import Login from 'screens/Login';
import Register from 'screens/Register';
import HomePrivate from 'screens/Home/Private';
import NotFound from 'screens/NotFound';
import Search from 'screens/Search';

const initialState = {};
const history = createBrowserHistory();

const configureStore = (preloadedState) => {
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
          <Route path="/search" component={Search} />
          <Route path="/dashboard" component={HomePrivate} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);
