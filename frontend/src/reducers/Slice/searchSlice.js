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
      state.users = action.payload.response?.data;
      state.isLoading = false;
    },
    ACTION_SEARCH: (state) => {
      state.isLoading = true;
      state.users = [];
      state.posts = [];
    },
    SEARCH: (state, action) => {
      state.users = action.payload.response?.data?.users;
      state.posts = action.payload.response?.data?.posts;
      state.isLoading = false;
    },
    REFRESH_SEARCH: (state, action) => {
      state.posts = action.payload.response?.data?.posts;
      state.isLoading = false;
    },
  },
});

export const {
  ACTION_SEARCH_TERM,
  SEARCH_TERM,
  ACTION_SEARCH,
  SEARCH,
  REFRESH_SEARCH,
} = searchSlice.actions;

export default searchSlice.reducer;
