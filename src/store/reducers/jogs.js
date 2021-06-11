import { FETCH_JOGS_SUCCESS, SET_JOG, FETCH_JOGS_ERROR } from './../actions/actionTypes';

const initialState = {
  jogs: [],
  error: '',
};

const jogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOGS_SUCCESS:
      return {
        ...state,
        jogs: action.jogs,
      };
    case FETCH_JOGS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_JOG:
      return {
        ...state,
        jogs: [...state.jogs, action.jog],
      };
    default:
      return state;
  }
};

export default jogsReducer;
