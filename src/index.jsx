// React and ReactDOM
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.scss';

// Translations
import './i18n';

// Translations Loading
import LoadingOverlay from 'react-loading-overlay';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { RootReducer } from 'store/reducers/root';

// Redux Devtools
import { composeWithDevTools } from 'redux-devtools-extension';

// Entry component
import App from './App';

const initialState = {};

export const configureStore = (preloadedState) => {
  return createStore(RootReducer(), preloadedState, composeWithDevTools());
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
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root') || document.createElement('div'),
);
