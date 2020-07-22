import React from 'react';
import { render } from 'tests/test-utils';
import Search from './index';

describe('Search', () => {
  let initialState;

  beforeAll(() => {
    initialState = {
      router: {
        location: {
          search: '',
        },
      },
    };
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Search />, { initialState });

      expect(container.querySelector('.search')).toMatchSnapshot();
    });
  });
});
