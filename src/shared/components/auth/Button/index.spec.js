import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { create } from 'react-test-renderer';
import Button from './index';

describe('Button', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const container = create(withWrapper(<Button />, initialState));
      expect(container.toJSON()).toMatchSnapshot();
    });
  });
});
