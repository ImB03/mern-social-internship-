import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  alert: "",
  isLoading: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    SET_POSTS: (state, action) => {
      state.posts = action.payload.posts;
    },
    SET_POST: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { SET_POSTS, SET_POST } = postSlice.actions;

export default postSlice.reducer;
