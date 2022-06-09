import { createSlice } from "@reduxjs/toolkit";

export const mineSlice = createSlice({
  name: "mine",
  initialState: {
    mineData: [],
    isStart: true,
    flag: 12,
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
    setFlag: (state = initialState, action) => {
      return {
        ...state,
        flag: state.flag + action.payload,
      };
    },

    gameEnd: (state) => {
      return {
        mineData: [],
        isStart: true,
        flag: 12,
      };
    },
  },
});

export const { gameStart, setFlag, gameEnd } = mineSlice.actions;
export default mineSlice.reducer;
