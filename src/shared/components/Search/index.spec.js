import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Search from './index';

describe('Search', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<Search />, initialState);

      expect(container.querySelector('.search-form')).toMatchSnapshot();
    });
  });
});
