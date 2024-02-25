declare global {
  interface CanvasRenderingContext2D {
    drawPixel: (x: number, y: number) => void;
  }
}

export {};
