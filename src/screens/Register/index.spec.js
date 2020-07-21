import React from 'react';
import { render } from 'tests/test-utils';
import Register from './index';

describe('Register', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Register />, { initialState });

      expect(container.querySelector('body .register')).toMatchSnapshot();
    });
  });
});
