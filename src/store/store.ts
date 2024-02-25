import { configureStore } from "@reduxjs/toolkit";

import { requestPoints } from "./pointsSlice";
import { requestSelectedTool } from "./selectedToolSlice";
import { requestSelectedAlgorithm } from "./selectedAlgorithmSlice";

export const store = configureStore({
  reducer: {
    [requestPoints.name]: requestPoints.reducer,
    [requestSelectedTool.name]: requestSelectedTool.reducer,
    [requestSelectedAlgorithm.name]: requestSelectedAlgorithm.reducer,
  },
});
