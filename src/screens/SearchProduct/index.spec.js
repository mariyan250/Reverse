import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import SearchProduct from './index';

describe('SearchProduct', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { asFragment } = renderWithRouter(<SearchProduct />, initialState);

      expect(asFragment(<SearchProduct />)).toMatchSnapshot();
    });
  });
});
