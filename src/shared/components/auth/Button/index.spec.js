import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { render } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(withWrapper(<Button />), initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
