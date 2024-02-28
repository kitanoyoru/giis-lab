import { Point } from "../../model/point";

const b = 20;

export const Hyperbola = (p1: Point, p2: Point): Point[] => {
  const points: Point[] = [];

  const centerX = (p1.X + p2.X) / 2;
  const centerY = (p1.Y + p2.Y) / 2;

  const a = Math.sqrt((p2.X - p1.X) ** 2 + (p2.Y - p1.Y) ** 2) / 2;

  const isHorizontal = p1.Y === p2.Y;

  const step = isHorizontal ? 0.1 * a : 0.1 * b;
  const range = 2 * a; // Adjust range to generate more or fewer points

  for (let d = -range; d <= range; d += step) {
    if (isHorizontal) {
      const x = centerX + d;
      const y = centerY + Math.sqrt(b ** 2 * ((x - centerX) ** 2 / a ** 2 - 1));
      points.push({ X: x, Y: y });
      points.push({ X: x, Y: 2 * centerY - y }); // Symmetric point
    } else {
      const y = centerY + d;
      const x = centerX + Math.sqrt(b ** 2 * ((y - centerY) ** 2 / a ** 2 - 1));
      points.push({ X: x, Y: y });
      points.push({ X: 2 * centerX - x, Y: y }); // Symmetric point
    }
  }

  return points;
};
