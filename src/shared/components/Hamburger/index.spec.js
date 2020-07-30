import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { create } from 'react-test-renderer';
import Hamburger from './index';

describe('Hamburger', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const component = create(withWrapper(<Hamburger />, initialState));
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
