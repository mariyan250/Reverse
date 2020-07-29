import React from 'react';
import { render } from 'tests/test-utils';
import SearchProduct from './index';

describe('SearchProduct', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(
        <SearchProduct location={{ search: 'q=technology' }} />,
        initialState,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
