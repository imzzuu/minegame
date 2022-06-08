import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./reducer/store.js";

import "./index.css";

import MineGame from "./MineGame";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <MineGame />
  </Provider>
  // {/* </React.StrictMode> */}
);
