import reducer, { initialState } from './auth';
import { AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/actionTypes';

describe('auth reducer', () => {
  it('AUTH_SUCCESS', () => {
    const token = 'bear:1234567890';
    const action = {
      type: AUTH_SUCCESS,
      token,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      token,
    });
  });

  it('AUTH_LOGOUT', () => {
    const action = {
      type: AUTH_LOGOUT,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      token: null,
    });
  });
});
