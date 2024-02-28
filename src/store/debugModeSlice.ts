import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRootState } from "./model";

export interface IRequest {
  debugMode: boolean;
}
interface IInitialState {
  debugMode: boolean;
}

const initialState: IInitialState = {
  debugMode: false,
};

export const requestDebugMode = createSlice({
  name: "requestDebugMode",
  initialState,
  reducers: {
    setDebugMode(state, action: PayloadAction<IRequest>) {
      state.debugMode = action.payload.debugMode;
    },
  },
});

export const selectDebugMode = (state: IRootState) =>
  state.requestDebugMode.debugMode;

export const { setDebugMode } = requestDebugMode.actions;
