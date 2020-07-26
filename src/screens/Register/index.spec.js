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
      const { asFragment } = renderWithRouter(<Register />, initialState);

      expect(asFragment(<Register />)).toMatchSnapshot();
    });
  });
});
