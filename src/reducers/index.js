/* eslint-disable import/order */
import { combineReducers } from 'redux';
import taskReducer from '../reducers/task';
import uiReducer from './ui';
const rootReducer = combineReducers({
  task: taskReducer,
  ui: uiReducer,
});
export default rootReducer;
