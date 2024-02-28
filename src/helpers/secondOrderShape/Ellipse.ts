import { Point } from "../../model/point";

export const Ellipse = (p1: Point, p2: Point): Point[] => {
  const points: Point[] = [];

  if (p1.X > p2.X) {
    [p1, p2] = [p2, p1];
  }

  const a = Math.abs(p2.X - p1.X) / 2;
  const b = Math.abs(p2.Y - p1.Y) / 2;
  const h = (p1.X + p2.X) / 2;
  const k = (p1.Y + p2.Y) / 2;

  const step = 0.01;

  for (let x = p1.X; x <= p2.X; x += step) {
    const y = k + (b / a) * Math.sqrt(a * a - (x - h) * (x - h));
    points.push({ X: x, Y: y });

    if (x !== h) {
      const ySymmetric = 2 * k - y;
      points.push({ X: x, Y: ySymmetric });
    }
  }

  return points;
};
