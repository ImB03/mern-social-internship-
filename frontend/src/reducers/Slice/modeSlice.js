import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  alert: "",
  isLoading: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    SET_MODE: (state, action) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { SET_MODE } = modeSlice.actions;

export default modeSlice.reducer;
