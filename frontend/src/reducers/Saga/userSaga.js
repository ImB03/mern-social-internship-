import { call, put, takeEvery } from "redux-saga/effects";

import {
  ACTION_FRIEND_REQUEST,
  ACTION_GET_USER,
  ACTION_UPDATE_USER,
  FRIEND_REQUEST,
  UPDATE_USER,
} from "../slice/userSlice";
import { getOneUser, updateUser, friendRequest } from "../../api";
import { GET_USER } from "../slice/slice";

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
    const response = yield call(() => updateUser(action.payload.dataUser));
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

//FRIEND REQUEST
function* FriendRequest(action) {
  try {
    const response = yield call(() => friendRequest(action.payload));
    yield put(FRIEND_REQUEST({ response }));
  } catch (error) {
    yield put(FRIEND_REQUEST({ response: error.response }));
    console.log(error);
  }
}

function* UserSaga() {
  yield takeEvery(ACTION_GET_USER, GetOneUser);
  yield takeEvery(ACTION_UPDATE_USER, UpdateUser);
  yield takeEvery(ACTION_FRIEND_REQUEST, FriendRequest);
}

export default UserSaga;
