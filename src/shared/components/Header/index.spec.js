import React from 'react';
import { render } from 'tests/test-utils';
import Header from './index';

describe('Header', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Header />, initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
