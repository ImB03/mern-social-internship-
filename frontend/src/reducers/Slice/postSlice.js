import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: {},
    isLoading: false,
    response: null,
  },
  reducers: {
    ACTION_CREATE_POST: (state) => {
      state.isLoading = true; //fake loading
    },
    ACTION_GET_ALL_POSTS: (state) => {
      state.isLoading = true;
    },
    ACTION_GET_POST: (state) => {
      state.isLoading = true;
      state.post = {};
    },
    GET_POST: (state, action) => {
      state.post = action.payload.response?.data;
      state.isLoading = false;
    },
    ACTION_UPDATE_POST: (state) => {
      state.isLoading = true;
    },
    UPDATE_POST: (state, action) => {
      alert(action.payload.response?.data.message);
      state.response = action.payload.response;
      action.payload?.setIsUpdatePost(false);
      state.isLoading = false;
    },
    ACTION_DELETE_POST: (state) => {
      state.isLoading = true;
    },
    DELETE_POST: (state, action) => {
      alert(action.payload.response?.data.message);
      state.response = action.payload.response;
      action.payload?.setIsDeletePost(false);
      state.isLoading = false;
    },
    ACTION_COMMENT_POST: (state) => {
      state.isLoading = true;
    },
    COMMENT_POST: (state, action) => {
      state.response = action.payload.response;
      state.post = action.payload.response?.data;
      action.payload?.setInputComment("");
      state.isLoading = false;
    },
    ACTION_LIKE_POST: (state) => {
      state.isLoading = true;
    },
    LIKE_POST: (state, action) => {
      state.response = action.payload.response;
      state.post = action.payload.response?.data?.post;
      state.posts = action.payload.response?.data?.posts;
      state.isLoading = false;
    },
    // REFRESH_POST: (state, action) => {},
  },
});

export const {
  ACTION_CREATE_POST,
  ACTION_GET_ALL_POSTS,
  GET_ALL_POSTS,
  ACTION_GET_POST,
  GET_POST,
  ACTION_UPDATE_POST,
  UPDATE_POST,
  ACTION_DELETE_POST,
  DELETE_POST,
  ACTION_COMMENT_POST,
  COMMENT_POST,
  ACTION_LIKE_POST,
  LIKE_POST,
} = postSlice.actions;

export default postSlice.reducer;
