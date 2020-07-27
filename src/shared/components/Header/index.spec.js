import React from 'react';
import { render, waitForElement } from 'tests/test-utils';
import Header from './index';

describe('Header', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<Header />, initialState);
      await waitForElement(() => getByTestId('header'));
      expect(container).toMatchSnapshot();
    });
  });
});
