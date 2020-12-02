
import { all } from 'redux-saga/effects'
import advisorsSaga from './advisors/sagas/advisors.saga.js'
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
      advisorsSaga()
  ])
}
