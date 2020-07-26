import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Product from './index';

describe('ItemScreen', () => {
  let initialState;

  beforeAll(() => {
    initialState = {
      router: {},
    };
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<Product />, initialState);

      expect(container.querySelector('.product')).toMatchSnapshot();
    });
  });
});
