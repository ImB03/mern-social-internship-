import { call, put, takeEvery } from "redux-saga/effects";

import {
  ACTION_CREATE_POST,
  CREATE_POST,
  ACTION_GET_ALL_POSTS,
  GET_ALL_POSTS,
  ACTION_GET_POST,
  GET_POST,
} from "../slice/postSlice";
import { createPost, getOnePost, getAllPosts } from "../../api";

// CREATE POST
function* CreatePost(action) {
  try {
    const response = yield call(() => createPost(action.payload.dataPost));
    yield put(
      CREATE_POST({
        response,
        setIsCreatePost: action.payload?.setIsCreatePost,
      })
    );
  } catch (error) {
    yield put(CREATE_POST({ response: error.response }));
    console.log(error);
  }
}

// GET POST
function* GetAllPosts() {
  try {
    const response = yield call(() => getAllPosts());
    yield put(GET_ALL_POSTS({ response }));
  } catch (error) {
    yield put(GET_ALL_POSTS({ response: error.response }));
    console.log(error);
  }
}

function* GetOnePost(action) {
  try {
    const response = yield call(() => getOnePost(action.payload));
    yield put(GET_POST({ response }));
  } catch (error) {
    yield put(GET_POST({ response: error.response }));
    console.log(error);
  }
}

function* PostSaga() {
  yield takeEvery(ACTION_CREATE_POST, CreatePost);
  yield takeEvery(ACTION_GET_ALL_POSTS, GetAllPosts);
  yield takeEvery(ACTION_GET_POST, GetOnePost);
}

export default PostSaga;
