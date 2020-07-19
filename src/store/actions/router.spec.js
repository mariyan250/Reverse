import * as actions from './router';
import * as types from '../action-types';

describe('Actions', () => {
  it('should create an action get the router state', () => {
    const expectedAction = {
      type: types.GET_ROUTER,
    };
    expect(actions.getRouterState()).toEqual(expectedAction);
  });
});
