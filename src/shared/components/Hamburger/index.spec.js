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
      const { container } = renderWithRouter(<Hamburger />, initialState);

      expect(container.querySelector('.hamburger')).toMatchSnapshot();
    });
  });
});
