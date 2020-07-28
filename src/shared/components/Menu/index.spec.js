import React from 'react';
import { render, waitForElement, cleanup } from 'tests/test-utils';
import Menu from './index';

describe('Menu', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  afterEach(cleanup);

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(<Menu links={[]} />, initialState);
      await waitForElement(() => getByTestId('menu'));
      expect(container).toMatchSnapshot();
    });
  });
});
