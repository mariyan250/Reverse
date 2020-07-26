import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Header from './index';

describe('Header', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<Header />, initialState);

      expect(container.querySelector('.header')).toMatchSnapshot();
    });
  });
});
