import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    setItems: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsActions = itemSlice.actions;

export default itemSlice.reducer;
