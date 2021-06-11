import { SET_FILTER_START, SET_FILTER_END, SET_TOGGLE_FORM } from './actionTypes';

export const actionFilterStart = (filterStart) => ({
  type: SET_FILTER_START,
  filterStart,
});

export const actionFilterEnd = (filterEnd) => ({
  type: SET_FILTER_END,
  filterEnd,
});

export const actionToggleForm = (isOpenFilter) => ({
  type: SET_TOGGLE_FORM,
  isOpenFilter,
});
