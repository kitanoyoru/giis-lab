import { Point } from "../../model/point";

export const Parabola = (p1: Point, p2: Point): Point[] => {
  const points: Point[] = [];

  const h = p1.X;
  const k = p1.Y;

  const a = (p2.Y - k) / (p2.X - h) ** 2;

  const range = 100;
  for (let x = h - range; x <= h + range; x += 0.5) {
    const y = a * (x - h) ** 2 + k;
    points.push({ X: x, Y: y });
  }

  return points;
};
