import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer.js';
import View_discuss from './View_discuss.js';
const reducer = combineReducers({
  LoginReducer,
  View_discuss
});

export default reducer;
