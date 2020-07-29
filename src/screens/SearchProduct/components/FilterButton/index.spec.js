import React from 'react';
import { render } from 'tests/test-utils';
import FilterButton from './index';

describe('FilterButton', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<FilterButton />, initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
