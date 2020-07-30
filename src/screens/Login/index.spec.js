import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { create } from 'react-test-renderer';
import Login from './index';

describe('Login', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const component = create(withWrapper(<Login />, initialState));
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
