import { configureStore } from "@reduxjs/toolkit";

import { requestSelectedTool } from "./selectedToolSlice";
import { requestSelectedAlgorithm } from "./selectedAlgorithmSlice";

export const store = configureStore({
  reducer: {
    [requestSelectedTool.name]: requestSelectedTool.reducer,
    [requestSelectedAlgorithm.name]: requestSelectedAlgorithm.reducer,
  },
});
