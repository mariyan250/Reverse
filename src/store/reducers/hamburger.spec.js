import { hamburgerReducer } from './hamburger';
import { TOGGLE_HAMBURGER } from '../action-types';

describe('Hamburger Reducer', () => {
  it('should reduce and change the isOpen value ', () => {
    const action = {
      type: TOGGLE_HAMBURGER,
      payload: {
        isOpen: true,
      },
    };

    expect(hamburgerReducer({ isOpen: false }, action)).toEqual({ isOpen: true });
  });
});
