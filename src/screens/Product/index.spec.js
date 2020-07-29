import React from 'react';
import { render } from 'tests/test-utils';
import Product from './index';

describe('ItemScreen', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Product match={{ params: { id: '3' } }} />, initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
