import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import FilterDropdown from './index';

describe('FilterDropdown', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { asFragment } = renderWithRouter(<FilterDropdown />, initialState);

      expect(asFragment(<FilterDropdown />)).toMatchSnapshot();
    });
  });
});
