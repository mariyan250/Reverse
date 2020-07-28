import React from 'react';
import { render, waitForElement, cleanup } from 'tests/test-utils';
import SearchProduct from './index';

describe('SearchProduct', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  afterEach(cleanup);

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(
        <SearchProduct location={{ search: 'q=technology' }} />,
        initialState,
      );
      await waitForElement(() => getByTestId('search-product'));
      expect(container).toMatchSnapshot();
    });
  });
});
