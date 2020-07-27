import React from 'react';
import { render } from 'tests/test-utils';
import { waitForElement, getByText } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<Home />, initialState);
      await waitForElement(() => getByTestId('home'));
      expect(container).toMatchSnapshot();
    });
  });
});
