import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import SearchProduct from './index';

describe('SearchProduct', () => {
  let initialState;

  beforeAll(() => {
    initialState = {
      router: {
        search: '',
      },
    };
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<SearchProduct />, initialState);

      expect(container.querySelector('.search-product')).toMatchSnapshot();
    });
  });
});
