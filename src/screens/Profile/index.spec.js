import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { render } from '@testing-library/react';
import Profile from './index';

describe('Profile', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(withWrapper(<Profile />), initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
