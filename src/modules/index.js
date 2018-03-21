import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter/counter';
import api from './api/apiReducer';

export default combineReducers({
  routing: routerReducer,
  counter,
  api,
});
