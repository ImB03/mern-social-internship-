import { call, put, takeEvery } from "redux-saga/effects";

import {
  ACTION_CREATE_POST,
  CREATE_POST,
  ACTION_GET_ALL_POSTS,
  GET_ALL_POSTS,
  ACTION_GET_POST,
  GET_POST,
  UPDATE_POST,
  ACTION_UPDATE_POST,
  ACTION_DELETE_POST,
  DELETE_POST,
  COMMENT_POST,
  ACTION_COMMENT_POST,
  LIKE_POST,
  ACTION_LIKE_POST,
  GET_ALL_POSTS_USER,
  ACTION_GET_ALL_POSTS_USER,
} from "../slice/postSlice";
import {
  createPost,
  getOnePost,
  getAllPosts,
  getAllPostsUser,
  updatePost,
  deletePost,
  commentPost,
  likePost,
} from "../../api";
import { REFRESH_SEARCH } from "../slice/searchSlice";

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
    yield put(
      CREATE_POST({
        response: error.response,
      })
    );
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

function* GetAllPostsUser(action) {
  try {
    const response = yield call(() => getAllPostsUser(action.payload));
    yield put(GET_ALL_POSTS_USER({ response }));
  } catch (error) {
    yield put(GET_ALL_POSTS_USER({ response: error.response }));
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

//UPDATE POST
function* UpdatePost(action) {
  try {
    const response = yield call(() =>
      updatePost(action.payload.postId, action.payload.dataPost)
    );
    yield put(
      UPDATE_POST({ response, setIsUpdatePost: action.payload.setIsUpdatePost })
    );
  } catch (error) {
    yield put(
      UPDATE_POST({
        response: error.response,
      })
    );
    console.log(error);
  }
}

//DELETE POST

function* DeletePost(action) {
  try {
    const response = yield call(() => deletePost(action.payload.postId));
    yield put(
      DELETE_POST({ response, setIsDeletePost: action.payload.setIsDeletePost })
    );
  } catch (error) {
    yield put(
      DELETE_POST({
        response: error.response,
      })
    );
    console.log(error);
  }
}

//COMMENT POST

function* CommentPost(action) {
  try {
    const response = yield call(() =>
      commentPost(action.payload.dataComment, action.payload.postId)
    );
    yield put(
      COMMENT_POST({
        response,
        setInputComment: action.payload.setInputComment,
      })
    );
  } catch (error) {
    yield put(
      COMMENT_POST({
        response: error.response,
      })
    );
    console.log(error);
  }
}

function* LikePost(action) {
  try {
    const response = yield call(() => likePost(action.payload));
    yield put(
      LIKE_POST({
        response,
      })
    );
    yield put(
      REFRESH_SEARCH({
        response,
      })
    );
  } catch (error) {
    yield put(
      LIKE_POST({
        response: error.response,
      })
    );
    console.log(error);
  }
}

function* PostSaga() {
  yield takeEvery(ACTION_CREATE_POST, CreatePost);
  yield takeEvery(ACTION_GET_ALL_POSTS, GetAllPosts);
  yield takeEvery(ACTION_GET_ALL_POSTS_USER, GetAllPostsUser);
  yield takeEvery(ACTION_GET_POST, GetOnePost);
  yield takeEvery(ACTION_UPDATE_POST, UpdatePost);
  yield takeEvery(ACTION_DELETE_POST, DeletePost);
  yield takeEvery(ACTION_COMMENT_POST, CommentPost);
  yield takeEvery(ACTION_LIKE_POST, LikePost);
}

export default PostSaga;
