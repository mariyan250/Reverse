import React from 'react';
import { render, waitForElement } from 'tests/test-utils';
import Search from './index';

describe('Search', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<Search />, initialState);
      await waitForElement(() => getByTestId('search'));
      expect(container).toMatchSnapshot();
    });
  });
});
