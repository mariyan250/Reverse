import React from 'react';
import { render, waitForElement } from 'tests/test-utils';
import Product from './index';

describe('ItemScreen', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<Product />, initialState);
      await waitForElement(() => getByTestId('product'));
      expect(container).toMatchSnapshot();
    });
  });
});
