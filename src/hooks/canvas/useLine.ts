import { UltimateContexter } from "../../hooks/context";
import { useSelector } from "../../hooks/redux";
import { AlgorithmType } from "../../model/algorithm";
import { Point } from "../../model/point";
import { selectSelectedAlgorithm } from "../../store/selectedAlgorithmSlice";
import { useState } from "react";
import { DDA } from "../../helpers/lineAlgorithms/DDA";
import { Bresenham } from "../../helpers/lineAlgorithms/Bresenham";
import { Wu } from "../../helpers/lineAlgorithms/Wu";
import { selectDebugMode } from "../../store/debugModeSlice";
import { sleep } from "../../utils/sleep";

interface useLineReturn {
  drawLine: (point: Point) => void;
  clearLineState: () => void;
}

export const useLine = (ctx: UltimateContexter | undefined): useLineReturn => {
  const [lastPoint, setLastPoint] = useState<Point>();

  const algorithm = useSelector(selectSelectedAlgorithm);
  const debugMode = useSelector(selectDebugMode);

  const drawLine = async (point: Point) => {
    if (ctx) {
      if (lastPoint) {
        if (lastPoint.X != point.X && lastPoint.Y != point.Y) {
          let points = [] as Point[];
          switch (algorithm) {
            case AlgorithmType.DDA: {
              points = DDA(lastPoint, point);
              break;
            }
            case AlgorithmType.BRESENHAM: {
              points = Bresenham(lastPoint, point);
              break;
            }
            case AlgorithmType.WU: {
              let style = "";
              ctx(({ context }) => (style = context.fillStyle as string));

              points = Wu(lastPoint, point, style);
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
            if (debugMode) {
              await sleep(100);
            }
          }
        }
      }
    }
    setLastPoint(point);
  };

  const clearLineState = () => {
    setLastPoint(undefined);
  };

  return {
    drawLine,
    clearLineState,
  };
};
