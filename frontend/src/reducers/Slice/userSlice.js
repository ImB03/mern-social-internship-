import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],

    isLoading: false,
    response: null,
  },
  reducers: {
    ACTION_GET_USER: (state) => {
      state.isLoading = true;
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
    ACTION_FRIEND_REQUEST: (state) => {
      state.isLoading = true;
    },
    FRIEND_REQUEST: (state, action) => {
      alert(action.payload.response?.data.message);
      state.isLoading = false;
    },
  },
});

export const {
  ACTION_GET_USER,
  ACTION_UPDATE_USER,
  UPDATE_USER,
  ACTION_FRIEND_REQUEST,
  FRIEND_REQUEST,
} = userSlice.actions;

export default userSlice.reducer;
