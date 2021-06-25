import { fetchJogsError, fetchJogsSuccess, createJog } from './jogs';
import { FETCH_JOGS_SUCCESS, SET_JOG, FETCH_JOGS_ERROR } from './actionTypes';

const jogs = [
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

describe('jogs actions', () => {
  it('fetchJogsError', () => {
    const error = 'Большая и важная ошибка';

    expect(fetchJogsError(error)).toEqual({
      type: FETCH_JOGS_ERROR,
      error,
    });
  });

  it('fetchJogsSuccess', () => {
    expect(fetchJogsSuccess(jogs)).toEqual({
      type: FETCH_JOGS_SUCCESS,
      jogs,
    });
  });

  it('createJog', () => {
    const jog = jogs[0];

    expect(createJog(jog)).toEqual({
      type: SET_JOG,
      jog,
    });
  });
});
