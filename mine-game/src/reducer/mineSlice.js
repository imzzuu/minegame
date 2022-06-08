import { createSlice } from "@reduxjs/toolkit";

export const mineSlice = createSlice({
  name: "mine",
  initialState: {
    mineData: [],
  },
  // reducer 정의
  reducers: {
    mineSearch: (state = initialState, action) => {
      return {
        mineData: [...action.payload],
      };
    },
  },
});

export const { mineSearch } = mineSlice.actions;
export default mineSlice.reducer;
