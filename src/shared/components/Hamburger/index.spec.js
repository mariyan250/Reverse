import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { render } from '@testing-library/react';
import Hamburger from './index';

describe('Hamburger', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(withWrapper(<Hamburger />), initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
