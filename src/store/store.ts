import { configureStore } from "@reduxjs/toolkit";

import { requestSelectedTool } from "./selectedToolSlice";
import { requestSelectedAlgorithm } from "./selectedAlgorithmSlice";
import { requestDebugMode } from "./debugModeSlice";

export const store = configureStore({
  reducer: {
    [requestSelectedTool.name]: requestSelectedTool.reducer,
    [requestSelectedAlgorithm.name]: requestSelectedAlgorithm.reducer,
    [requestDebugMode.name]: requestDebugMode.reducer,
  },
});
