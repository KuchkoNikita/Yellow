import { combineReducers } from 'redux';
import authReducer from './auth';
import jogsReducer from './jogs';
import filterReducer from './filter';

export default combineReducers({
  auth: authReducer,
  jogs: jogsReducer,
  filter: filterReducer,
});
