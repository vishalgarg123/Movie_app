import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./HomeSlice";

export const movieStore = configureStore({
  reducer: {
    home: homeSlice.reducer,
  },
});
