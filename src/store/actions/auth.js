import axios from 'axios';
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';

const ONE_HOUR = 3600000;

export const auth = () => {
  return async (dispatch) => {
    const authData = {
      uuid: 'hello',
    };

    const url = 'https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin';

    const response = await axios.post(url, authData);
    const data = response.data.response;

    const expirationDate = new Date(new Date().getTime() + ONE_HOUR);

    localStorage.setItem('token', data.access_token);
    localStorage.setItem('expirationDate', expirationDate);

    dispatch(authSuccess(data.access_token));
    dispatch(autoLogout(data.expires_in));
  };
};

export const autoLogout = (time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time);
  };
};

export const autoLogin = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));

      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(autoLogout(expirationDate.getTime() - new Date().getTime()));
      }
    }
  };
};

export const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    token,
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');

  return {
    type: AUTH_LOGOUT,
  };
};
