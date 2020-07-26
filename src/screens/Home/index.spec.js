import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Home from './index';

describe('Home', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<Home />, initialState);

      expect(container.querySelector('.home')).toMatchSnapshot();
    });
  });
});
