import React from 'react';
import { renderWithRouter } from 'tests/test-utils';
import Input from './index';

describe('Input', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = renderWithRouter(<Input />, initialState);

      expect(container.querySelector('.auth-input')).toMatchSnapshot();
    });
  });
});
