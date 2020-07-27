import React from 'react';
import { render } from 'tests/test-utils';
import Input from './index';

describe('Input', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Input />, initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
