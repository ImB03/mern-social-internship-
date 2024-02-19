import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    ACTION_SIGNUP: (state, action) => {},

    ACTION_SIGNIN: (state, action) => {},
  },
});

export const { ACTION_SIGNUP, ACTION_SIGNIN } = authSlice.actions;

export default authSlice.reducer;
