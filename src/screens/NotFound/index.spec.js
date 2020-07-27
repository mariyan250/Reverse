import React from 'react';
import { render } from 'tests/test-utils';
import NotFound from './index';

describe('NotFound', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<NotFound />, initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
