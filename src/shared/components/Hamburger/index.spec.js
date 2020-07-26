import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Hamburger from './index';

describe('Hamburger', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { asFragment } = renderWithRouter(<Hamburger />, initialState);

      expect(asFragment(<Hamburger />)).toMatchSnapshot();
    });
  });
});
