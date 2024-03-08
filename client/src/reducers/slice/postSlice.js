import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
  },
  reducers: {
    ACTION_CREATE_POST: (state) => {},
    ACTION_GET_ALL_POSTS: (state) => {},
    ACTION_UPDATE_POST: (state) => {},
    ACTION_DELETE_POST: (state) => {},
    ACTION_COMMENT_POST: (state) => {
      state.isLoading = true;
    },

    ACTION_LIKE_POST: (state) => {
      state.isLoading = true;
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
  ACTION_LIKE_POST,

} = postSlice.actions;

export default postSlice.reducer;
