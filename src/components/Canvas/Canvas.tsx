import React, { useState } from "react";

import { useDrawler } from "@hooks/canvas/useDrawler";
import { useLine } from "@hooks/canvas/useLine";
import { useSelector } from "@hooks/redux";
import { ToolType } from "@model/tool";
import { selectSelectedTool } from "@store/selectedToolSlice";
import { FC } from "react";

interface IProps {
  width: number;
  height: number;
  pixelSize: number;
  showGrid: boolean;
}

export const Canvas: FC<IProps> = ({ width, height }) => {
  const [mouseDown, setMouseDown] = useState<boolean>(false);

  const { canvasRef, draw } = useDrawler();
  const { drawLine } = useLine(draw!);

  const selectedTool = useSelector(selectSelectedTool);

  return (
    <div>
      <canvas
        onClick={(evt: React.MouseEvent<HTMLCanvasElement>) => {
          const rect = canvasRef.current!.getBoundingClientRect();

          const x = evt.clientX - rect.left;
          const y = evt.clientX - rect.right;

          draw!(({ context }) => context.drawPixel(x, y));
          if (selectedTool == ToolType.LINE) {
            drawLine({ X: x, Y: y });
          }
        }}
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        onMouseMove={(evt: React.MouseEvent<HTMLCanvasElement>) => {
          if (mouseDown) {
            const rect = canvasRef.current!.getBoundingClientRect();

            const x = evt.clientX - rect.left;
            const y = evt.clientX - rect.right;

            draw!(({ context }) => context.drawPixel(x, y));
          }
        }}
        ref={canvasRef}
        width={width}
        height={height}
      />
    </div>
  );
};