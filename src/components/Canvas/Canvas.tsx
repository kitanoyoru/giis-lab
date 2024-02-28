import React, { useState } from "react";

import { useDrawler } from "../../hooks/canvas/useDrawler";
import { useSelector } from "../../hooks/redux";
import { ToolType } from "../../model/tool";
import { selectSelectedTool } from "../../store/selectedToolSlice";
import { FC } from "react";
import { ColorPicker } from "../../components/ColorPicker";
import { useLine, useSecondOrderShape } from "../../hooks/canvas";

interface IProps {
  width: number;
  height: number;
}

export const Canvas: FC<IProps> = ({ width, height }) => {
  const [mouseDown, setMouseDown] = useState<boolean>(false);

  const selectedTool = useSelector(selectSelectedTool);

  const { canvasRef, draw } = useDrawler();

  const { drawLine } = useLine(draw!);
  const { drawSecondOrderShape } = useSecondOrderShape(draw!);

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
            case ToolType.CIRCLE: {
              drawSecondOrderShape({ X: x, Y: y });
              break;
            }
            case ToolType.ELLIPSE: {
              drawSecondOrderShape({ X: x, Y: y });
              break;
            }
            case ToolType.HYPERBOLA: {
              drawSecondOrderShape({ X: x, Y: y });
              break;
            }
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
      <ColorPicker draw={draw!} />
    </div>
  );
};
