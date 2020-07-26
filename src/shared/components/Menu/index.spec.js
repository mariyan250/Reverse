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
      const { container } = renderWithRouter(<Menu />, initialState);

      expect(container.querySelector('.menu')).toMatchSnapshot();
    });
  });
});
