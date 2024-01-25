import { call, put, takeEvery } from "redux-saga/effects";

import {
  ACTION_GET_USER,
  ACTION_UPDATE_USER,
  GET_USER,
  UPDATE_USER,
} from "../slice/userSlice";
import { getOneUser, updateUser } from "../../api";

//GET ONE USER
function* GetOneUser(action) {
  try {
    const response = yield call(() => getOneUser(action.payload));
    yield put(GET_USER({ response }));
  } catch (error) {
    yield put(GET_USER({ response: error.response }));
    console.log(error);
  }
}

//UPDATE USER
function* UpdateUser(action) {
  try {
    const response = yield call(() =>
      updateUser(action.payload.dataUser)
    );
    yield put(
      UPDATE_USER({ response, setIsUpdateUser: action.payload.setIsUpdateUser })
    );
  } catch (error) {
    yield put(
      UPDATE_USER({
        response: error.response,
      })
    );
    console.log(error);
  }
}

function* UserSaga() {
  yield takeEvery(ACTION_GET_USER, GetOneUser);
  yield takeEvery(ACTION_UPDATE_USER, UpdateUser);
}

export default UserSaga;
