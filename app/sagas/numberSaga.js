// ini untuk ngetes perbedaan takeEvery dengan takeLatest

import { put, takeLatest, select } from "redux-saga/effects";
import { delay } from "redux-saga";

function* increment(action) {
  let number = yield select(state => state.number);
  yield delay(1000);
  yield put({
    type: "INCREMENT_SUCCESS",
    number: number + 1
  });
}

export default [takeLatest("INCREMENT", increment)];
