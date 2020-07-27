import React from 'react';
import { render, waitForElement } from 'tests/test-utils';
import FilterButton from './index';

describe('FilterButton', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<FilterButton />, initialState);
      await waitForElement(() => getByTestId('filter-button'));
      expect(container).toMatchSnapshot();
    });
  });
});
