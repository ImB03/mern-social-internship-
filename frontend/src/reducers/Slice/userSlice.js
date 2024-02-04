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
    ACTION_UPDATE_USER: (state) => {
      state.isLoading = true;
    },
    UPDATE_USER: (state, action) => {
      alert(action.payload.response?.data.message);
      state.response = action.payload.response;
      action.payload?.setIsUpdateUser(false);
      state.isLoading = false;
    },
    // REFRESH_USER: (state, action) => {},
  },
});

export const { ACTION_GET_USER, GET_USER, ACTION_UPDATE_USER, UPDATE_USER } =
  userSlice.actions;

export default userSlice.reducer;
