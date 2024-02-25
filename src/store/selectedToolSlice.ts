import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRootState } from "@store/model";
import { ToolType } from "@model";

export interface IRequest {
  tool: ToolType;
}
interface IInitialState {
  tool: ToolType;
}

const initialState: IInitialState = {
  tool: ToolType.LINE,
};

export const requestSelectedTool = createSlice({
  name: "requestSelectedTool",
  initialState,
  reducers: {
    setSelectedTool(state, action: PayloadAction<IRequest>) {
      state.tool = action.payload.tool;
    },
  },
});

export const selectSelectedTool = (state: IRootState) =>
  state.requestSelectedTool.tool;

export const { setSelectedTool } = requestSelectedTool.actions;
