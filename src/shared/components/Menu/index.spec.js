import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Menu from './index';

describe('Menu', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { asFragment } = renderWithRouter(<Menu />, initialState);

      expect(asFragment(<Menu />)).toMatchSnapshot();
    });
  });
});
