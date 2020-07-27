import React from 'react';
import { render, waitForElement } from 'tests/test-utils';
import Register from './index';

describe('Register', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<Register />, initialState);
      await waitForElement(() => getByTestId('register'));
      expect(container).toMatchSnapshot();
    });
  });
});
