import { Point } from "@model/point";

export const Bresenham = (p1: Point, p2: Point): Point[] => {
  let [currentX, currentY] = [p1.X, p1.Y];

  const deltaX = Math.abs(p2.X - p1.X);
  const deltaY = Math.abs(p2.Y - p1.Y);

  const stepX = p1.X < p2.X ? 1 : -1;
  const stepY = p1.Y < p2.Y ? 1 : -1;

  let error = deltaX - deltaY;

  const newPoints: Point[] = [];
  while (currentX != p2.X || currentY != p2.Y) {
    newPoints.push({ X: currentX, Y: currentY });
    const doubleError = error * 2;
    if (doubleError > -deltaY) {
      error -= deltaY;
      currentX += stepX;
    }
    if (doubleError < deltaX) {
      error += deltaX;
      currentY += stepY;
    }
  }

  newPoints.push({ X: currentX, Y: currentY });

  return newPoints;
};
