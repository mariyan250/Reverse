import React from 'react';
import { render } from 'tests/test-utils';
import Hamburger from './index';

describe('Hamburger', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Hamburger />, initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
