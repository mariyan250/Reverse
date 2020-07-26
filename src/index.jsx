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
import { createBrowserHistory } from 'history';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { RootReducer } from 'store/reducers/root';

// Redux Devtools
import { composeWithDevTools } from 'redux-devtools-extension';

// Entry component
import App from './App';

const initialState = {};
const history = createBrowserHistory();

export const configureStore = (preloadedState) => {
  return createStore(RootReducer(history), preloadedState, composeWithDevTools());
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
  document.getElementById('root'),
);
