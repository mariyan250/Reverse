import React from 'react';
import { render } from 'tests/test-utils';
import CategoryCard from './index';

describe('CategoryCard', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<CategoryCard url="/" />, initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
