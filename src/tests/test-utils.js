import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '../index';
import LoadingOverlay from 'react-loading-overlay';

export const renderWithRouter = (component, initialState = {}) => {
  return render(
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
        <Router>{component}</Router>
      </Provider>
    </Suspense>,
  );
};
