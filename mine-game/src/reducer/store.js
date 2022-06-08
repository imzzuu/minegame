import { configureStore } from "@reduxjs/toolkit";
import mineSlice from "./mineSlice";

export default configureStore({
  reducer: {
    mine: mineSlice,
  },
});
