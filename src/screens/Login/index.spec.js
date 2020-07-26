import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Login from './index';

describe('Login', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<Login />, initialState);

      expect(container.querySelector('.login')).toMatchSnapshot();
    });
  });
});
