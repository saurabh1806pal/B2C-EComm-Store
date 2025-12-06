import { configureStore } from "@reduxjs/toolkit";
import { fetchStatusSlice } from "./fetchStatusSlice";
import { itemSlice } from "./itemsSlice";
import { bagSlice } from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
