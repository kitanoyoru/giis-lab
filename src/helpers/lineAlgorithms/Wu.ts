import { Point } from "../../model/point";
import { pixelize } from "../../utils/pixelize";
import { Bresenham } from "./Bresenham";

export const Wu = (p1: Point, p2: Point, style: string): Point[] => {
  const px1 = pixelize({ x: p1.X, y: p1.Y, pixelsize: 10 });
  const px2 = pixelize({ x: p2.X, y: p2.Y, pixelsize: 10 });

  let [x1, x2] = [px1.x, px2.x];
  let [y1, y2] = [px1.y, px2.y];

  if (x2 < x1) {
    x1 += x2;
    x2 = x1 - x2;
    x1 -= x2;
    y1 += y2;
    y2 = y1 - y2;
    y1 -= y2;
  }

  const dx = x2 - x1;
  const dy = y2 - y1;

  if (dx === 0 || dy === 0) {
    return Bresenham(p1, p2);
  }

  const newPoints: Point[] = [];
  let gradient: number = 0;
  if (dx > dy) {
    gradient = (dy / dx) * 10;

    let intery: number = y1 + gradient;

    newPoints.push({ X: x1, Y: y1 });
    for (let x = x1; x < x2; x += 10) {
      newPoints.push({
        X: x,
        Y: Math.floor(intery),
        fillStyle: hex2rgba(style, 255 - fractionalPart(intery) * 255),
      });
      newPoints.push({
        X: x,
        Y: Math.floor(intery) + 10,
        fillStyle: hex2rgba(style, fractionalPart(intery) * 255),
      });

      intery += gradient;
    }

    newPoints.push({
      X: x2,
      Y: y2,
      fillStyle: style,
    });
  } else {
    gradient = (dx / dy) * 10;

    let interx = x1 + gradient;
    newPoints.push({
      X: x1,
      Y: y1,
      fillStyle: style,
    });

    for (let y = y1; y < y2; y += 10) {
      newPoints.push({
        X: Math.floor(interx),
        Y: y,
        fillStyle: hex2rgba(style, 255 - fractionalPart(interx) * 255),
      });
      newPoints.push({
        X: Math.floor(interx),
        Y: y,
        fillStyle: hex2rgba(style, fractionalPart(interx) * 255),
      });

      interx += gradient;
    }

    newPoints.push({
      X: x2,
      Y: y2,
      fillStyle: style,
    });
  }

  return newPoints;
};

function fractionalPart(x: number): number {
  const tmp: number = Math.floor(x);
  return x - tmp;
}

function hex2rgba(hexa: string, interx: number) {
  console.log(hexa);
  const r = parseInt(hexa.slice(1, 3), 16);
  const g = parseInt(hexa.slice(3, 5), 16);
  const b = parseInt(hexa.slice(5, 7), 16);
  const res =
    "rgba(" + r + ", " + g + ", " + b + ", " + Math.round(interx) / 256 + ")";
  console.log(res);
  return res;
}
