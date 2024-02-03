import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    users: [],
    posts: [],
    isLoading: false,
  },
  reducers: {
    ACTION_SEARCH_TERM: (state) => {
      state.isLoading = true;
      state.users = [];
    },
    SEARCH_TERM: (state, action) => {
      state.users = action.payload.response.data;
      state.isLoading = false;
    },
  },
});

export const { ACTION_SEARCH_TERM, SEARCH_TERM } = searchSlice.actions;

export default searchSlice.reducer;
