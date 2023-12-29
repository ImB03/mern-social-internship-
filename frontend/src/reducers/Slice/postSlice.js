import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

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
    CREATE_POST: (state, action) => {
      state.response = action.payload.response;
      alert(action.payload.response?.data.message);
      action.payload?.setIsCreatePost(false);
      state.isLoading = false;
    },
    ACTION_GET_ALL_POSTS: (state) => {
      state.isLoading = true;
    },
    GET_ALL_POSTS: (state, action) => {
      state.posts = action.payload.response?.data;
      state.isLoading = false;
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
      state.response = action.payload.response;
      alert(action.payload.response?.data.message);
      action.payload?.setIsUpdatePost(false);
      state.isLoading = false;
    },
    ACTION_DELETE_POST: (state) => {
      state.isLoading = true;
    },
    DELETE_POST: (state, action) => {
      state.response = action.payload.response;
      alert(action.payload.response?.data.message);
      action.payload?.setIsDeletePost(false);
      state.isLoading = false;
    },

    // SET_POST: (state, action) => {
    //   const updatedPosts = state.posts.map((post) => {
    //     if (post._id === action.payload.post._id) return action.payload.post;
    //     return post;
    //   });
    //   state.posts = updatedPosts;
    // },
  },
});

export const {
  ACTION_CREATE_POST,
  CREATE_POST,
  ACTION_GET_ALL_POSTS,
  GET_ALL_POSTS,
  ACTION_GET_POST,
  GET_POST,
  ACTION_UPDATE_POST,
  UPDATE_POST,
  ACTION_DELETE_POST,
  DELETE_POST,
} = postSlice.actions;

export default postSlice.reducer;
