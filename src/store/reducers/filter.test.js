import moment from 'moment';

import reducer, { initialState } from './filter';
import { SET_FILTER_START, SET_FILTER_END, SET_TOGGLE_FORM } from '../actions/actionTypes';

describe('filter reducer', () => {
  it('SET_FILTER_START', () => {
    const action = {
      type: SET_FILTER_START,
      filterStart: moment('24.06.2021', 'DD.MM.YYYY'),
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      filterStart: moment('24.06.2021', 'DD.MM.YYYY'),
    });
  });

  it('SET_FILTER_END', () => {
    const action = {
      type: SET_FILTER_END,
      filterEnd: moment('24.10.2021', 'DD.MM.YYYY'),
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      filterEnd: moment('24.10.2021', 'DD.MM.YYYY'),
    });
  });

  it('SET_TOGGLE_FORM', () => {
    const action = {
      type: SET_TOGGLE_FORM,
      isOpenFilter: true,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isOpenFilter: true,
    });
  });
});
