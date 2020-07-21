import React from 'react';
import { render } from 'tests/test-utils';
import Product from './index';

describe('ItemScreen', () => {
  let initialState;

  beforeAll(() => {
    initialState = {
      router: {},
    };
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Product />, { initialState });

      expect(container.querySelector('.item-screen')).toMatchSnapshot();
    });
  });
});
