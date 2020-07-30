import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { create } from 'react-test-renderer';
import CategoryCard from './index';

describe('CategoryCard', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const component = create(withWrapper(<CategoryCard url="/" />, initialState));
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
