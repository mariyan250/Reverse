import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import NotFound from './index';

describe('NotFound', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<NotFound />, initialState);

      expect(container.querySelector('.not-found')).toMatchSnapshot();
    });
  });
});
