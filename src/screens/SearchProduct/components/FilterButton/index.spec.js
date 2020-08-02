import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { render } from '@testing-library/react';
import FilterButton from './index';

describe('FilterButton', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(withWrapper(<FilterButton />), initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
