import React from 'react';
import { render } from 'tests/test-utils';
import Button from './index';

describe('Button', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Button />, initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
