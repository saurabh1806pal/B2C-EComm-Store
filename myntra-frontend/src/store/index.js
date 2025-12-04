import { configureStore } from "@reduxjs/toolkit";
import { fetchStatusSlice } from "./fetchStatusSlice";
import { itemSlice } from "./itemsSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default myntraStore;
