import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { create } from 'react-test-renderer';
import SearchProduct from './index';

describe('SearchProduct', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const component = create(
        withWrapper(<SearchProduct location={{ search: 'q=technology' }} />, initialState),
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
