import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    user: {},
    isLoading: false,
    response: null,
  },
  reducers: {
    ACTION_GET_USER: (state) => {
      state.isLoading = true;
      state.user = {};
    },
    GET_USER: (state, action) => {
      state.user = action.payload.response?.data;
      state.isLoading = false;
    },
  },
});

export const { ACTION_GET_USER, GET_USER } = userSlice.actions;

export default userSlice.reducer;
