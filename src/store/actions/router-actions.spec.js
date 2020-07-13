import * as actions from './router-actions';
import * as types from '../action-types/action-types';

describe('Actions', () => {
  it('should create an action get the router state', () => {
    const expectedAction = {
      type: types.GET_ROUTER,
    };
    expect(actions.getRouterState()).toEqual(expectedAction);
  });
});
