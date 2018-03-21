import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter/reducer';
import api from './api/reducer';

export default combineReducers({
  routing: routerReducer,
  counter,
  api,
});
