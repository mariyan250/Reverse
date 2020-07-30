import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { create } from 'react-test-renderer';
import NotFound from './index';

describe('NotFound', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const component = create(withWrapper(<NotFound />, initialState));
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
