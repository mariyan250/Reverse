import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import ItemList from './index';

describe('Search', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<ItemList />, initialState);

      expect(container.querySelector('.item-list')).toMatchSnapshot();
    });
  });
});
