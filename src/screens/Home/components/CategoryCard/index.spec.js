import React from 'react';
import { render, waitForElement } from 'tests/test-utils';
import CategoryCard from './index';

describe('CategoryCard', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<CategoryCard />, initialState);
      await waitForElement(() => getByTestId('category-card'));
      expect(container).toMatchSnapshot();
    });
  });
});
