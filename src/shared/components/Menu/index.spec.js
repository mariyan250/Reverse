import React from 'react';
import { render } from 'tests/test-utils';
import Menu from './index';

describe('Menu', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Menu links={[]} />, initialState);

      expect(container).toMatchSnapshot();
    });
  });
});
