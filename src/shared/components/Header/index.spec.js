import React from 'react';
import { withWrapper } from 'tests/test-utils';
import { render } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(withWrapper(<Header />), initialState);
      expect(container).toMatchSnapshot();
    });
  });
});
