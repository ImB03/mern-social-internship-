import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    users: [],
    posts: [],
    isLoading: false,
  },
  reducers: {
    ACTION_SEARCH: (state) => {
      state.isLoading = true;
      state.users = [];
      state.posts = [];
    },
  },
});

export const { ACTION_SEARCH } = searchSlice.actions;

export default searchSlice.reducer;
