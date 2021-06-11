import axios from 'axios';

import { standardizationJog } from '../../utils';
import { FETCH_JOGS_SUCCESS, FETCH_JOGS_ERROR, SET_JOG } from './actionTypes';

export const fetchJogs = () => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    const url = 'https://jogtracker.herokuapp.com/api/v1/data/sync';
    const configAxios = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(url, configAxios);
      const jogs = response.data.response.jogs;

      dispatch(fetchJogsSuccess(jogs));
    } catch (error) {
      new Error(error);
    }
  };
};

export const fetchCreateJog = (data) => {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
      const url = 'https://jogtracker.herokuapp.com/api/v1/data/jog';
      const configAxios = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(url, data, configAxios);
      const jog = standardizationJog(response.data.response);

      dispatch(createJog(jog));
    } catch (error) {
      new Error(error);
    }
  };
};

export const fetchJogsError = (error) => ({
  type: FETCH_JOGS_ERROR,
  error,
});

export const fetchJogsSuccess = (jogs) => ({
  type: FETCH_JOGS_SUCCESS,
  jogs,
});

export const createJog = (jog) => ({
  type: SET_JOG,
  jog,
});
