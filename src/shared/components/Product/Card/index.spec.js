import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Item from './index';

describe('Item', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<Item />, initialState);

      expect(container.querySelector('.item')).toMatchSnapshot();
    });
  });
});
