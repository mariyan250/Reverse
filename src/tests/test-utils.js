import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import { RootReducer } from 'store/reducers/root';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n-test-setup';

const history = createMemoryHistory();

function render(
  ui,
  { initialState, store = createStore(RootReducer(history), initialState), ...renderOptions } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
