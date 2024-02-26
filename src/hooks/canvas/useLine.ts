import { UltimateContexter } from "../../hooks/context";
import { useSelector } from "../../hooks/redux";
import { AlgorithmType } from "../../model/algorithm";
import { Point } from "../../model/point";
import { selectSelectedAlgorithm } from "../../store/selectedAlgorithmSlice";
import { useState } from "react";
import { DDA } from "../../helpers/lineAlgorithms/DDA";

interface useLineReturn {
  drawLine: (point: Point) => void;
}

export const useLine = (ctx: UltimateContexter | undefined): useLineReturn => {
  const [lastPoint, setLastPoint] = useState<Point>();

  const algorithm = useSelector(selectSelectedAlgorithm);

  const drawLine = (point: Point) => {
    if (ctx) {
      if (lastPoint) {
        if (lastPoint.X != point.X && lastPoint.Y != point.Y) {
          let points = [] as Point[];
          switch (algorithm) {
            case AlgorithmType.DDA: {
              points = DDA(lastPoint, point);
            }
          }
          for (const p of points) {
            ctx(({ context }) => context.drawPixel(p.X, p.Y));
          }
        }
      }
    }
    setLastPoint(point);
  };

  return {
    drawLine,
  };
};
