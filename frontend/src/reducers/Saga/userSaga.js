import { call, put, takeEvery } from "redux-saga/effects";

import { ACTION_GET_USER, GET_USER } from "../slice/userSlice";
import { getOneUser } from "../../api";

function* GetOneUser(action) {
  try {
    const response = yield call(() => getOneUser(action.payload));
    yield put(GET_USER({ response }));
  } catch (error) {
    yield put(GET_USER({ response: error.response }));
    console.log(error);
  }
}

function* UserSaga() {
  yield takeEvery(ACTION_GET_USER, GetOneUser);
}

export default UserSaga;
