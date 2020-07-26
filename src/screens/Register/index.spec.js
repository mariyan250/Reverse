import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Register from './index';

describe('Register', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<Register />, initialState);

      expect(container.querySelector('.register')).toMatchSnapshot();
    });
  });
});
