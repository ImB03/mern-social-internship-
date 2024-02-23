import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "host",
  initialState: {
    response: null,
    userNow: null,
    token: null,
    users: [],
    user: {},
    posts: [],
    isLoading: false,
  },
  reducers: {
    SIGNUP: (state, action) => {
      state.response = action.payload.response;
      state.isLoading = false;
    },
    SIGNIN: (state, action) => {
      state.response = action.payload.response;
      if (action.payload.response?.status === 200) {
        state.token = action.payload.response?.data.user?.token;
        state.userNow = action.payload.response?.data.user;
        localStorage.setItem(
          "token",
          JSON.stringify(action.payload.response?.data.user?.token)
        );
      }
      state.isLoading = false;
    },
    LOGNOUT: (state, action) => {
      localStorage.removeItem("token");
      state.userNow = null;
      state.users = [];
      state.user = {};
      state.posts = [];
      state.isLoading = false;
    },
    SET_POSTS: (state, action) => {
      state.posts = action.payload.posts;
      state.isLoading = false;
    },
    SET_USERS: (state, action) => {
      state.users = action.payload.response?.data;
      state.isLoading = false;
    },
    SET_POST: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          return action.payload.post;
        } else {
          return post;
        }
      });
      state.isLoading = false;
    },
    SET_USER: (state, action) => {
      state.user = action.payload.user;

      state.users = state.users.map((user) => {
        if (user._id === action.payload.user._id) {
          return action.payload.user;
        } else {
          return user;
        }
      });
      state.isLoading = false;
    },
  },
});

export const {
  SIGNUP,
  SIGNIN,
  LOGNOUT,
  SET_POSTS,
  SET_USERS,
  SET_POST,
  SET_USER,
} = slice.actions;

export default slice.reducer;
