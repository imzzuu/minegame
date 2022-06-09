import { createSlice } from "@reduxjs/toolkit";

export const mineSlice = createSlice({
  name: "mine",
  initialState: {
    mineData: [],
    isStart: true,
    flag: 12,
    flagMine: 1,
    openedCell: 1,
  },
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
    countFlagMine: (state = initialState) => {
      return {
        ...state,
        flagMine: state.flagMine + 1,
      };
    },
    countOpenedCell: (state = initialState) => {
      return {
        ...state,
        openedCell: state.openedCell + 1,
      };
    },
    gameEnd: (state) => {
      return {
        mineData: [],
        isStart: true,
        flag: 12,
        flagMine: 1,
        openedCell: 1,
      };
    },
  },
});

export const { gameStart, setFlag, countFlagMine, countOpenedCell, gameEnd } =
  mineSlice.actions;
export default mineSlice.reducer;
