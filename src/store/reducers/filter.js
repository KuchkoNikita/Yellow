import { SET_FILTER_START, SET_FILTER_END, SET_TOGGLE_FORM } from './../actions/actionTypes';

export const initialState = {
  filterStart: {},
  filterEnd: {},
  isOpenFilter: false,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_START:
      return {
        ...state,
        filterStart: action.filterStart,
      };
    case SET_FILTER_END:
      return {
        ...state,
        filterEnd: action.filterEnd,
      };
    case SET_TOGGLE_FORM:
      return {
        ...state,
        isOpenFilter: action.isOpenFilter,
      };
    default:
      return state;
  }
};

export default filterReducer;
