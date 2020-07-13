import { RootReducer } from './root-reducer';
import { createStore } from 'redux';

let store;

describe('Root reducer', () => {
  beforeAll(() => {
    store = createStore(RootReducer({ location: '/' }));
  });

  it('should return the initial state', () => {
    const expectation = { action: undefined, location: { '0': '/', query: {} } };
    expect(store.getState().router).toEqual(expectation);
  });
});
