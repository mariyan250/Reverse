// React and Suspense
import React, { Suspense } from 'react';
import LoadingOverlay from 'react-loading-overlay';

// Router
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { configureStore } from '../index';

// i18
import { I18nextProvider } from 'react-i18next';
import i18 from './i18n-test-setup';

// Testing Libary
import { render } from '@testing-library/react';

const customRender = (ui, options) => {
  const Wrapper = ({ children }) => {
    return (
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
        <I18nextProvider i18n={i18}>
          <Provider store={configureStore(options)}>
            <Router>{children}</Router>
          </Provider>
        </I18nextProvider>
      </Suspense>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
