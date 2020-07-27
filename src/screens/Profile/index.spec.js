import React from 'react';
import { render } from 'tests/test-utils';
import Profile from './index';

describe('Search', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Profile />, initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
