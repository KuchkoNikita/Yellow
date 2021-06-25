import { authSuccess, logout } from './auth';
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';

describe('auth actions', () => {
  it('authSuccess', () => {
    const token = 'bear:1234567890';

    expect(authSuccess(token)).toEqual({
      type: AUTH_SUCCESS,
      token,
    });
  });

  it('logout', () => {
    expect(logout()).toEqual({
      type: AUTH_LOGOUT,
    });
  });
});
