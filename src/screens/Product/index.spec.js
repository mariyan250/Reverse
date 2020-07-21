import React from 'react';
import { render } from 'tests/test-utils';
import Item from './index';
import { RootReducer } from 'store/reducers/root';
import { createMemoryHistory } from 'history';
import { connectRouter } from 'connected-react-router';

describe('ItemScreen', () => {
  let initialState;

  beforeAll(() => {
    const history = createMemoryHistory();
    initialState = {
      router: connectRouter(history),
    };
  });

  describe('Rendering', () => {
    it('should render the component with initial state', () => {
      const { container } = render(<Item />, { initialState });

      expect(container.querySelector('body .item-screen')).toMatchSnapshot();
    });
  });
});
