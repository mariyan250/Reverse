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
      const { asFragment } = renderWithRouter(<ItemList />, initialState);

      expect(asFragment(<ItemList />)).toMatchSnapshot();
    });
  });
});
