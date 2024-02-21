import { call, put, takeEvery } from "redux-saga/effects";

import { ACTION_SIGNUP, ACTION_SIGNIN } from "../slice/authSlice";
import { SIGNIN, SIGNUP } from "../slice/slice";
import { signup, signin } from "../../api";

// SIGN UP
function* Signup(action) {
  try {
    const response = yield call(() => signup(action.payload.dataUser));
    yield put(SIGNUP({ response }));
  } catch (error) {
    yield put(SIGNUP({ response: error.response }));
    console.log(error);
  }
}

// SIGN IN
function* Signin(action) {
  try {
    const response = yield call(() => signin(action.payload.dataUser));
    yield put(SIGNIN({ response }));
  } catch (error) {
    yield put(SIGNIN({ response: error.response }));
    console.log(error);
  }
}

function* AuthSaga() {
  yield takeEvery(ACTION_SIGNUP, Signup);
  yield takeEvery(ACTION_SIGNIN, Signin);
}

export default AuthSaga;
