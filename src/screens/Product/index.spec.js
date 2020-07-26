import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Product from './index';

describe('ItemScreen', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { asFragment } = renderWithRouter(<Product />, initialState);

      expect(asFragment(<Product />)).toMatchSnapshot();
    });
  });
});
