import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import FilterButton from './index';

describe('FilterButton', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { asFragment } = renderWithRouter(<FilterButton />, initialState);

      expect(asFragment(<FilterButton />)).toMatchSnapshot();
    });
  });
});
