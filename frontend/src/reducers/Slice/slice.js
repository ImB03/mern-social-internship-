import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "host",
  initialState: {
    response: null,
    userNow: null,
    token: null,
    users: [],
    posts: [],
    isLoading: false,
  },
  reducers: {
    SIGNUP: (state, action) => {
      // alert(action.payload.response?.data.message);
      state.response = action.payload.response;
      // if (action.payload.response?.status === 200) {
      //   action.payload.setIsSignup((prev) => !prev);
      // }
      state.isLoading = false;
    },
    SIGNIN: (state, action) => {
      // alert(action.payload.response?.data.message);
      state.response = action.payload.response;
      if (action.payload.response?.status === 200) {
        state.token = action.payload.response?.data.user?.token;

        state.userNow = action.payload.response?.data.user;
        localStorage.setItem(
          "token",
          JSON.stringify(action.payload.response?.data.user?.token)
        );
        // action.payload.navigate("/");
      }
      state.isLoading = false;
    },
    LOGNOUT: (state, action) => {
      state.isLoading = true;
      localStorage.removeItem("token");
      state.userNow = null;
      state.isLoading = false;
    },
    SET_POSTS: (state, action) => {
      state.posts = action.payload.response?.data;
      state.isLoading = false;
    },
    SET_USERS: (state, action) => {
      state.users = action.payload.response?.data;
      state.isLoading = false;
    },
    SET_POST: (state, action) => {
      state.isLoading = false;
    },
    SET_USER: (state, action) => {
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
