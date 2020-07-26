import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Profile from './index';

describe('Search', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<Profile />, initialState);

      expect(container.querySelector('.profile')).toMatchSnapshot();
    });
  });
});
