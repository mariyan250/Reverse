import React from 'react';
import { render } from 'tests/test-utils';
import Login from './index';

describe('Login', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Login />, { initialState });

      expect(container.querySelector('body .login')).toMatchSnapshot();
    });
  });
});
