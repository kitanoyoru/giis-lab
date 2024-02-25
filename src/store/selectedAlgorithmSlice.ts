import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRootState } from "@store/model";
import { AlgorithmType } from "@model";

export interface IRequest {
  algorithm: AlgorithmType;
}
interface IInitialState {
  algorithm: AlgorithmType;
}

const initialState: IInitialState = {
  algorithm: AlgorithmType.DDA,
};

export const requestSelectedAlgorithm = createSlice({
  name: "requestSelectedAlgorithm",
  initialState,
  reducers: {
    setSelectedAlgorithm(state, action: PayloadAction<IRequest>) {
      state.algorithm = action.payload.algorithm;
    },
  },
});

export const selectSelectedAlgorithm = (state: IRootState) =>
  state.requestSelectedAlgorithm.algorithm;

export const { setSelectedAlgorithm } = requestSelectedAlgorithm.actions;
