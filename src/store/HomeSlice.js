import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "homeSlice",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGeneres: (state, action) => {
      state.genres = action.payload;
    },
  },
});
export const homeSliceactions=homeSlice.actions
export default homeSlice
