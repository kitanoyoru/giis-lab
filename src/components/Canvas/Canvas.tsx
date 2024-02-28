import React, { useState } from "react";

import { useDrawler } from "../../hooks/canvas/useDrawler";
import { useSelector } from "../../hooks/redux";
import { ToolType } from "../../model/tool";
import { selectSelectedTool } from "../../store/selectedToolSlice";
import { FC } from "react";
import { ColorPicker } from "../../components/ColorPicker";
import { useClear, useLine, useSecondOrderShape } from "../../hooks/canvas";
import { setDebugMode } from "../../store/debugModeSlice";
import { useDispatch } from "../../hooks/redux";

interface IProps {
  width: number;
  height: number;
}

export const Canvas: FC<IProps> = ({ width, height }) => {
  const [mouseDown, setMouseDown] = useState<boolean>(false);

  const dispatch = useDispatch();

  const selectedTool = useSelector(selectSelectedTool);

  const { canvasRef, draw } = useDrawler();
  const { clear } = useClear();

  const { drawLine, clearLineState } = useLine(draw!);
  const { drawSecondOrderShape, clearSecondOrderShapeState } =
    useSecondOrderShape(draw!);

  return (
    <div>
      <canvas
        className={`mx-auto bg-white shadow shadow-indigo-100`}
        style={{ imageRendering: "pixelated" }}
        onClick={(evt: React.MouseEvent<HTMLCanvasElement>) => {
          const rect = canvasRef.current!.getBoundingClientRect();

          const x = evt.clientX - rect.left;
          const y = evt.clientY - rect.top;

          draw!(({ context }) => {
            context.drawPixel(x, y);
          });
          switch (selectedTool) {
            case ToolType.LINE: {
              drawLine({ X: x, Y: y });
              break;
            }
            case ToolType.CIRCLE:
            case ToolType.ELLIPSE:
            case ToolType.HYPERBOLA:
            case ToolType.PARABOLA: {
              drawSecondOrderShape({ X: x, Y: y });
              break;
            }
          }
        }}
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        onMouseMove={(evt: React.MouseEvent<HTMLCanvasElement>) => {
          if (mouseDown) {
            const rect = canvasRef.current!.getBoundingClientRect();

            const x = evt.clientX - rect.left;
            const y = evt.clientY - rect.top;

            draw!(({ context }) => context.drawPixel(x, y));
          }
        }}
        ref={canvasRef}
        width={width}
        height={height}
      />
      <div className="flex justify-between p-5">
        <ColorPicker draw={draw!} />
        <div className="flex gap-2">
          <button
            className="rounded border border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => {
              clearLineState();
              clearSecondOrderShapeState();
              draw!(clear);
            }}
          >
            Clear
          </button>
          <button
            className="rounded border border-red-700 bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            onClick={() => {
              dispatch(setDebugMode({ debugMode: true }));
            }}
          >
            DebugMode
          </button>
        </div>
      </div>
    </div>
  );
};
