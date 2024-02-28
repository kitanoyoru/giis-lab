import { UltimateContexter } from "../../hooks/context";
import { useSelector } from "../../hooks/redux";
import { Point } from "../../model/point";
import { useState } from "react";
import { selectSelectedTool } from "../../store/selectedToolSlice";
import { ToolType } from "../../model/tool";
import {
  Circle,
  Ellipse,
  Hyperbola,
  Parabola,
} from "../../helpers/secondOrderShape";

interface useSecondOrderShapeReturn {
  drawSecondOrderShape: (point: Point) => void;
}

export const useSecondOrderShape = (
  ctx: UltimateContexter | undefined,
): useSecondOrderShapeReturn => {
  const [lastPoint, setLastPoint] = useState<Point>();

  const tool = useSelector(selectSelectedTool);
  console.log(tool);

  const drawSecondOrderShape = (point: Point) => {
    if (ctx) {
      if (lastPoint) {
        if (lastPoint.X != point.X && lastPoint.Y != point.Y) {
          let points = [] as Point[];
          switch (tool) {
            case ToolType.CIRCLE: {
              points = Circle(lastPoint, point);
              break;
            }
            case ToolType.ELLIPSE: {
              points = Ellipse(lastPoint, point);
              break;
            }
            case ToolType.HYPERBOLA: {
              points = Hyperbola(lastPoint, point);
              break;
            }
            case ToolType.PARABOLA: {
              points = Parabola(lastPoint, point);
              break;
            }
          }
          for (const p of points) {
            ctx(({ context }) => {
              const prevStyle = context.fillStyle;
              if (p.fillStyle) {
                context.fillStyle = p.fillStyle;
              }
              context.drawPixel(p.X, p.Y);
              context.fillStyle = prevStyle;
            });
          }
        }
      }
    }
    setLastPoint(point);
  };

  return {
    drawSecondOrderShape,
  };
};
