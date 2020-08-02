import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { render } from '@testing-library/react';
import FilterDropdown from './index';

describe('FilterDropdown', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(withWrapper(<FilterDropdown />), initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
