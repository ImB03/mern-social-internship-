import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    response: null,
  },
  reducers: {
    ACTION_SIGNUP: (state, action) => {
      state.isLoading = true;
    },

    SIGNUP: (state, action) => {
      state.response = action.payload.response;
      alert(action.payload.response?.data.message);
      if (action.payload.response.status === 200) {
        action.payload.setIsSignup((prev) => !prev);
      }
      state.isLoading = false;
    },
    ACTION_SIGNIN: (state, action) => {
      state.isLoading = true;
    },

    SIGNIN: (state, action) => {
      state.response = action.payload.response;
      alert(action.payload.response?.data.message);
      if (action.payload.response?.status === 200) {
        state.user = action.payload.response.data.user;
        action.payload.navigate("/");
      }
      state.isLoading = false;
    },
  },
});

export const { ACTION_SIGNUP, ACTION_SIGNIN, SIGNUP, SIGNIN } =
  authSlice.actions;

export default authSlice.reducer;
