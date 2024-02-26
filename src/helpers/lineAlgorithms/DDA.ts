import { Point } from "../../model";

export const DDA = (p1: Point, p2: Point): Point[] => {
  const { X: x1, Y: y1 } = p1;
  const { X: x2, Y: y2 } = p2;

  const length = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));

  const dx = -(x1 - x2) / length;
  const dy = -(y1 - y2) / length;

  const result: Point[] = [];
  for (let i = 0; i < length; i++) {
    result.push({
      X: Math.round(x1 + i * dx),
      Y: Math.round(y1 + i * dy),
    });
  }

  return result;
};
