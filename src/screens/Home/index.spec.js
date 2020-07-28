import React from 'react';
import { render, waitForElement, cleanup } from 'tests/test-utils';
import Home from './index';

describe('Home', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  afterEach(cleanup);

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<Home />, initialState);
      await waitForElement(() => getByTestId('home'));
      expect(container).toMatchSnapshot();
    });
  });
});
