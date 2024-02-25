import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRootState } from "@store/model";
import { Point } from "@model";

export interface IRequest {
  point: Point;
}
interface IInitialState {
  points: Point[];
}

const initialState: IInitialState = {
  points: [],
};

export const requestPoints = createSlice({
  name: "requestPoints",
  initialState,
  reducers: {
    setPoints(state, action: PayloadAction<IRequest[]>) {
      state.points = action.payload.map((v) => v.point);
    },
    addPoint(state, action: PayloadAction<IRequest>) {
      state.points.push(action.payload.point);
    },
  },
});

export const selectPoints = (state: IRootState) => state.requestPoints.points;

export const { setPoints } = requestPoints.actions;
