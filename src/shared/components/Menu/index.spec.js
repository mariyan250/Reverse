import React from 'react';
import { render, waitForElement } from 'tests/test-utils';
import Menu from './index';

describe('Menu', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<Menu />, initialState);
      await waitForElement(() => getByTestId('menu'));
      expect(container).toMatchSnapshot();
    });
  });
});
