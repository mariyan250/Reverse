import React from 'react';
import { render, waitForElement } from 'tests/test-utils';
import Login from './index';

describe('Login', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<Login />, initialState);
      await waitForElement(() => getByTestId('login'));
      expect(container).toMatchSnapshot();
    });
  });
});
