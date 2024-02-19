import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    ACTION_SIGNUP: (state, action) => {
      state.isLoading = true;
    },

    ACTION_SIGNIN: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const { ACTION_SIGNUP, ACTION_SIGNIN } = authSlice.actions;

export default authSlice.reducer;
