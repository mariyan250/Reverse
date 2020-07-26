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
      const { asFragment } = renderWithRouter(<Login />, initialState);

      expect(asFragment(<Login />)).toMatchSnapshot();
    });
  });
});
