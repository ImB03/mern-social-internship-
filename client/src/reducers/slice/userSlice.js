import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    ACTION_GET_USER: (state) => {},
    ACTION_UPDATE_USER: (state) => {},
    // ACTION_FRIEND_REQUEST: (state) => {
    //   state.isLoading = true;
    // },
    // FRIEND_REQUEST: (state, action) => {
    //   alert(action.payload.response?.data.message);
    //   state.isLoading = false;
    // },
  },
});

export const {
  ACTION_GET_USER,
  ACTION_UPDATE_USER,
  // ACTION_FRIEND_REQUEST,
  // FRIEND_REQUEST,
} = userSlice.actions;

export default userSlice.reducer;
