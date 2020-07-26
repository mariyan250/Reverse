import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import CategoryCard from './index';

describe('CategoryCard', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<CategoryCard />, initialState);

      expect(container.querySelector('.category-card')).toMatchSnapshot();
    });
  });
});
