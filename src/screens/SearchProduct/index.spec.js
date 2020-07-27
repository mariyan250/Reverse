import React from 'react';
import { render, waitForElement } from 'tests/test-utils';
import SearchProduct from './index';

describe('SearchProduct', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<SearchProduct />, initialState);
      await waitForElement(() => getByTestId('search-product'));
      expect(container).toMatchSnapshot();
    });
  });
});
