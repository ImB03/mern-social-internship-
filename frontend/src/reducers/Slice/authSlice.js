import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    token: null,
  },
  reducers: {
    ACTION_SIGNUP: (state, action) => {
      state.isLoading = true;
    },

    SIGNUP: (state, action) => {
      // alert(action.payload.response?.data.message);
      if (action.payload.response.status === 200) {
        action.payload.setIsSignup((prev) => !prev);
      }
      state.isLoading = false;
    },
    ACTION_SIGNIN: (state, action) => {
      state.isLoading = true;
    },

    SIGNIN: (state, action) => {
      // alert(action.payload.response?.data.message);
      if (action.payload.response?.status === 200) {
        state.token = action.payload.response.data.user.token;

        state.user = action.payload.response.data.user;
        action.payload.navigate("/");
      }
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.response.data.user.token)
      );
      state.isLoading = false;
    },
    LOGNOUT: (state, action) => {
      state.isLoading = true;
      localStorage.removeItem("token");
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { ACTION_SIGNUP, ACTION_SIGNIN, SIGNUP, SIGNIN, LOGNOUT } =
  authSlice.actions;

export default authSlice.reducer;
