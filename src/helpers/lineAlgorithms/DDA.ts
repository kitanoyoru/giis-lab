import { Point } from "@model";

export const DDA = (p1: Point, p2: Point): Point[] => {
  const { X: x1, Y: y1 } = p1;
  const { X: x2, Y: y2 } = p2;

  const length = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));

  const dx = (x2 - x1) / length;
  const dy = (y2 - y1) / length;

  let x = x1 + 0.5 * Math.sign(dx);
  let y = y1 + 0.5 * Math.sign(dy);

  const result: Point[] = [{ X: x, Y: y }];
  for (let i = 0; i < length; i++) {
    [x, y] = [x + dx, y + dy];
    result.push({ X: x, Y: y });
  }

  return result;
};
