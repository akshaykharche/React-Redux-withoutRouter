import { fork } from 'redux-saga/effects';
import { loadContactsSaga, displayContactsSaga } from './Sagas';


export default function* rootSaga() {
  yield fork(loadContactsSaga);
  yield fork(displayContactsSaga);
}
