import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Header from './index';

describe('Header', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { asFragment } = renderWithRouter(<Header />, initialState);

      expect(asFragment(<Header />)).toMatchSnapshot();
    });
  });
});
