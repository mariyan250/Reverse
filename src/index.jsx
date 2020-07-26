// React and ReactDOM
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.scss';

// Translations
import './i18n';

// Translations Loading
import LoadingOverlay from 'react-loading-overlay';

// Router and History
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// Redux
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { RootReducer } from 'store/reducers/root';

// Entry component
import App from './App';

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
      <App history={history} />
    </Provider>
  </Suspense>,
  document.getElementById('root') || document.createElement('div'),
);
