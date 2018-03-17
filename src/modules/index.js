import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import api from './api';

export default combineReducers({
  routing: routerReducer,
  counter,
  api,
});
