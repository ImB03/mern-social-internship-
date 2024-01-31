import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    dataSearch: [],
    isLoading: false,
  },
  reducers: {
    ACTION_SEARCH_TERM: (state) => {
      state.isLoading = true;
    },
    SEARCH_TERM: () => {},
  },
});

export const { ACTION_SEARCH_TERM, SEARCH_TERM } = searchSlice.actions;

export default searchSlice.reducer;
