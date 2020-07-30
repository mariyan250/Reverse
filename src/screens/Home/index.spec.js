import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { create } from 'react-test-renderer';
import Home from './index';

describe('Home', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const component = create(withWrapper(<Home />, initialState));
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should get the promo posts and render them', () => {});
  });
});
