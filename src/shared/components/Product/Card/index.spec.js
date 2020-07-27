import React from 'react';
import { render, waitForElement } from 'tests/test-utils';
import Item from './index';

describe('Item', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<Item />, initialState);
      await waitForElement(() => getByTestId('item'));
      expect(container).toMatchSnapshot();
    });
  });
});
