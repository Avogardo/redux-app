import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import api from './apiReducer';

export default combineReducers({
  routing: routerReducer,
  counter,
  api,
});
