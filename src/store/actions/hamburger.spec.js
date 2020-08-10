import { toggleHamburger, closeHamburger } from './hamburger';
import { TOGGLE_HAMBURGER, CLOSE_HAMBURGER } from '../action-types';

describe('Hamburger Actions', () => {
  it('should return isOpen true on toggle hamburger', () => {
    expect(toggleHamburger(true)).toEqual({ type: TOGGLE_HAMBURGER, payload: { isOpen: true } });
  });

  it('should return isOpen true on toggle hamburger', () => {
    expect(closeHamburger()).toEqual({ type: CLOSE_HAMBURGER });
  });
});
