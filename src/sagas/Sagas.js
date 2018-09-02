import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import loadUserApi from '../api/Api';
// import * as types from '../constants/actionTypes';

export  function* loadContactsSaga() {
  yield* takeLatest('LOAD_USER_INITIAL', laodPizzaSaga);
}

export  function* displayContactsSaga() {
  yield* takeLatest('SHOW_DETAILS_INITIAL', ShowDetailsSaga);
}
export  function* laodPizzaSaga({ payload }) {
  try {
    const userObject = yield call(loadUserApi, payload);
    yield [ put({ type: 'LOAD_USER', users: userObject })];
  } catch (error) {
  console.log(error)
  }
}

export  function* ShowDetailsSaga({ payload }) { 
  try {
    let userObject = yield call(loadUserApi, payload);
    let display=userObject.filter(val=>val.general.firstName===payload.id);
    yield [ put({ type: 'SHOW_DETAILS', display })];
  } catch (error) {
  console.log(error)
  }
}




