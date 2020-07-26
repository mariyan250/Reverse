import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Button from './index';

describe('Button', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<Button />, initialState);

      expect(container.querySelector('.auth-btn')).toMatchSnapshot();
    });
  });
});
