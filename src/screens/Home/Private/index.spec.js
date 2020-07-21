import React from 'react';
import { render } from 'tests/test-utils';
import HomePrivate from './index';

describe('HomePrivate', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<HomePrivate />, { initialState });

      expect(container.querySelector('.home-private')).toMatchSnapshot();
    });
  });
});
