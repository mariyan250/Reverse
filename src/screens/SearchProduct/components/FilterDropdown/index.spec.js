import React from 'react';
import { render, waitForElement } from 'tests/test-utils';
import FilterDropdown from './index';

describe('FilterDropdown', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<FilterDropdown />, initialState);
      await waitForElement(() => getByTestId('filter-dropdown'));
      expect(container).toMatchSnapshot();
    });
  });
});
