import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  alert: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    ACTION_SIGNIN: (state, action) => {
      state.isLoading = true;
    },

    SIGNIN: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
    },
    ACTION_SIGNUP: (state, action) => {
      state.isLoading = true;
    },

    SIGNUP: (state, action) => {
      state.alert = action.payload;
      state.isLoading = false;
    },
    LOGOUT: (state) => {
      state.user = null;
      state.token = null;
    },
    SET_FRIEND: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
  },
});

export const {
  ACTION_SIGNUP,
  ACTION_SIGNIN,
  SIGNUP,
  SIGNIN,
  LOGOUT,
  SET_FRIEND,
} = authSlice.actions;

export default authSlice.reducer;
