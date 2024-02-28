import { Point } from "../../model/point";

const NumPoints = 100;

export const Circle = (p1: Point, p2: Point): Point[] => {
  const points: Point[] = [];

  const centerX = (p1.X + p2.X) / 2;
  const centerY = (p1.Y + p2.Y) / 2;

  const r = Math.sqrt((p2.X - p1.X) ** 2 + (p2.Y - p1.Y) ** 2) / 2;

  for (let i = 0; i < NumPoints; i++) {
    const theta = (i / NumPoints) * 2 * Math.PI;
    const x = centerX + r * Math.cos(theta);
    const y = centerY + r * Math.sin(theta);
    points.push({ X: x, Y: y });
  }

  return points;
};
