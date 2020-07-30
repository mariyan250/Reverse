import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { create } from 'react-test-renderer';
import Product from './index';

describe('ItemScreen', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const component = create(
        withWrapper(<Product match={{ params: { id: '3' } }} />, initialState),
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
