import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { create } from 'react-test-renderer';
import Item from './index';

describe('Item', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const component = create(withWrapper(<Item images={[]} />, initialState));
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
