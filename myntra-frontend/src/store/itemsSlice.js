import { createSlice } from "@reduxjs/toolkit";
import items from "../data/items";

export const itemSlice = createSlice({
  name: "items",
  initialState: items,
  reducers: {
    setItems: (state, action) => {
      return state;
    },
  },
});

export const itemsActions = itemSlice.actions;

export default itemSlice.reducer;
