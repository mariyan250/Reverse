import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { render } from '@testing-library/react';
import Product from './index';

describe('Product', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(
        withWrapper(<Product match={{ params: { id: '3' } }} />),
        initialState,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
