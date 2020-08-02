import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { render } from '@testing-library/react';
import Search from './index';

describe('Search', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(withWrapper(<Search />), initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
