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

export const withWrapper = (component, options) => {
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
          <Router>{component}</Router>
        </Provider>
      </I18nextProvider>
    </Suspense>
  );
};
