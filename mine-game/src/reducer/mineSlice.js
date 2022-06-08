import { createSlice } from "@reduxjs/toolkit";

export const mineSlice = createSlice({
  name: "mine",
  initialState: {
    mineData: [],
    isStart: true,
  },
  // reducer 정의
  reducers: {
    gameStart: (state = initialState, action) => {
      return {
        ...state,
        mineData: [...action.payload],
        isStart: false,
      };
    },
    gameEnd: (state) => {
      return {
        mineData: [],
        isStart: true,
      };
    },
  },
});

export const { gameStart, gameEnd } = mineSlice.actions;
export default mineSlice.reducer;
