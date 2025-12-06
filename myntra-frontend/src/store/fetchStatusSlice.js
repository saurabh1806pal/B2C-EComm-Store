import { createSlice } from "@reduxjs/toolkit";

export const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetchDone: false, currentlyFetching: false, error: null },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice.reducer;
