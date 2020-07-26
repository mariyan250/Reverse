import React, { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { configureStore } from '../index';
import LoadingOverlay from 'react-loading-overlay';

export const renderWithRouter = (component, initialState = {}) => {
  const history = createMemoryHistory();
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
        <Router history={history}>{component}</Router>
      </Provider>
    </Suspense>,
  );
};
