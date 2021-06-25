import reducer, { initialState } from './jogs';
import { FETCH_JOGS_SUCCESS, SET_JOG, FETCH_JOGS_ERROR } from '../actions/actionTypes';

const JOGS = [
  {
    id: 3090,
    user_id: '3',
    distance: 15,
    time: 14,
    date: 1296000,
  },
  {
    id: 3091,
    user_id: '3',
    distance: 11,
    time: 100,
    date: 652838400,
  },
];

describe('jogs reducer', () => {
  it('FETCH_JOGS_SUCCESS', () => {
    const action = {
      type: FETCH_JOGS_SUCCESS,
      jogs: JOGS,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      jogs: JOGS,
    });
  });

  it('FETCH_JOGS_ERROR', () => {
    const error = 'Большая и важная ошибка';

    const action = {
      type: FETCH_JOGS_ERROR,
      error,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      error,
    });
  });

  it('SET_JOG', () => {
    const action = {
      type: SET_JOG,
      jog: JOGS[0],
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      jogs: [JOGS[0]],
    });
  });
});
