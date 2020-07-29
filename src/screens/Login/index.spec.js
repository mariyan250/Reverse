import React from 'react';
import { render, fireEvent, createEvent } from 'tests/test-utils';
import Login from './index';

describe('Login', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Login />, initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
