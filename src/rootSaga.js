import { getDataSaga } from './sagas';
import { all } from 'redux-saga/effects';


export function* rootSaga() {
  yield all([
    getDataSaga(),
  ]);
}
