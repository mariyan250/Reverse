import React from 'react';
import { render, waitForElement, cleanup } from 'tests/test-utils';
import Product from './index';

describe('ItemScreen', () => {
  let initialState;

  beforeAll(() => {
    initialState = {};
  });

  afterEach(cleanup);

  describe('Rendering', () => {
    it('should render the component with initial state', async () => {
      const { container, getByTestId } = render(
        <Product match={{ params: { id: '3' } }} />,
        initialState,
      );
      await waitForElement(() => getByTestId('product'));
      expect(container).toMatchSnapshot();
    });
  });
});
