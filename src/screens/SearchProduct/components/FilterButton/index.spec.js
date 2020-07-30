import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { create } from 'react-test-renderer';
import FilterButton from './index';

describe('FilterButton', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const component = create(withWrapper(<FilterButton />, initialState));
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
