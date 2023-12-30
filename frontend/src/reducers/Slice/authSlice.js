import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    ACTION_SIGNUP: (state, action) => {
      state.isLoading = true;
    },

    SIGNUP: (state, action) => {
      if (action.payload.response.status === 200) {
        action.payload.setIsSignup((prev) => !prev);
      }
      state.isLoading = false;
      alert(action.payload.response?.data.message);
    },
    ACTION_SIGNIN: (state, action) => {
      state.isLoading = true;
    },

    SIGNIN: (state, action) => {
      if (action.payload.response?.status === 200) {
        state.user = action.payload.response.data.user;
        action.payload.navigate("/");
      }
      state.isLoading = false;
      alert(action.payload.response?.data.message);
    },
    LOGNOUT: (state, action) => {
      state.isLoading = true;
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { ACTION_SIGNUP, ACTION_SIGNIN, SIGNUP, SIGNIN, LOGNOUT } =
  authSlice.actions;

export default authSlice.reducer;
