import moment from 'moment';

import { actionFilterStart, actionFilterEnd, actionToggleForm } from './filter';
import { SET_FILTER_START, SET_FILTER_END, SET_TOGGLE_FORM } from './actionTypes';

describe('auth actions', () => {
  it('actionFilterStart', () => {
    const filterStart = moment('24.10.2021', 'DD.MM.YYYY');

    expect(actionFilterStart(filterStart)).toEqual({
      type: SET_FILTER_START,
      filterStart,
    });
  });

  it('actionFilterEnd', () => {
    const filterEnd = moment('24.12.2021', 'DD.MM.YYYY');

    expect(actionFilterEnd(filterEnd)).toEqual({
      type: SET_FILTER_END,
      filterEnd,
    });
  });

  it('actionToggleForm', () => {
    const isOpenFilter = true;

    expect(actionToggleForm(isOpenFilter)).toEqual({
      type: SET_TOGGLE_FORM,
      isOpenFilter,
    });
  });
});
