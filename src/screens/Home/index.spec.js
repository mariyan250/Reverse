import React from 'react';
import { render } from 'tests/test-utils';
import Home from './index';

describe('Home', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Home />, initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
