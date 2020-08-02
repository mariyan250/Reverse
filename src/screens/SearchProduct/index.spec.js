import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { render } from '@testing-library/react';
import SearchProduct from './index';

describe('SearchProduct', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(
        withWrapper(<SearchProduct location={{ search: 'q=technology' }} />),
        initialState,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
