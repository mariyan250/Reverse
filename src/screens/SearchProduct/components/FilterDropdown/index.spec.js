import React from 'react';
import { render } from 'tests/test-utils';
import FilterDropdown from './index';

describe('FilterDropdown', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<FilterDropdown />, initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
