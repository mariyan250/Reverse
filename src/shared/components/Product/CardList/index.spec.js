import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { create } from 'react-test-renderer';
import ItemList from './index';

describe('Search', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const component = create(withWrapper(<ItemList />, initialState));
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
