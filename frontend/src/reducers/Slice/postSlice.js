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
    ACTION_CREATE_POST: (state) => {},
    ACTION_GET_ALL_POSTS: (state) => {},
    ACTION_UPDATE_POST: (state) => {},
    ACTION_DELETE_POST: (state) => {},

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
  },
});

export const {
  ACTION_CREATE_POST,
  ACTION_GET_ALL_POSTS,
  GET_ALL_POSTS,
  ACTION_UPDATE_POST,
  ACTION_DELETE_POST,
  ACTION_COMMENT_POST,
  COMMENT_POST,
  ACTION_LIKE_POST,
  LIKE_POST,
} = postSlice.actions;

export default postSlice.reducer;
