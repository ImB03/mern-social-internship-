import { call, put, takeEvery } from "redux-saga/effects";

import {
  ACTION_FRIEND_REQUEST,
  ACTION_GET_USER,
  ACTION_UPDATE_USER,
  FRIEND_REQUEST,
} from "../slice/userSlice";
import { getOneUser, updateUser } from "../../api";
import { SET_POSTS, SET_USER } from "../slice/slice";

//GET ONE USER
function* GetOneUser(action) {
  try {
    const response = yield call(() => getOneUser(action.payload));
    yield put(SET_USER({ response, user: response.data }));
  } catch (error) {
    yield put(SET_USER({ response: error.response }));
    console.log(error);
  }
}

//UPDATE USER
function* UpdateUser(action) {
  try {
    const response = yield call(() => updateUser(action.payload));
    yield put(
      SET_USER({
        response,
        user: response.data.updatedUser,
      })
    );
    yield put(
      SET_POSTS({
        posts: response.data.posts,
      })
    );
  } catch (error) {
    yield put(
      SET_USER({
        response: error.response,
      })
    );
    console.log(error);
  }
}

//FRIEND REQUEST
// function* FriendRequest(action) {
//   try {
//     const response = yield call(() => friendRequest(action.payload));
//     yield put(FRIEND_REQUEST({ response }));
//   } catch (error) {
//     yield put(FRIEND_REQUEST({ response: error.response }));
//     console.log(error);
//   }
// }

function* UserSaga() {
  yield takeEvery(ACTION_GET_USER, GetOneUser);
  yield takeEvery(ACTION_UPDATE_USER, UpdateUser);
  // yield takeEvery(ACTION_FRIEND_REQUEST, FriendRequest);
}

export default UserSaga;
