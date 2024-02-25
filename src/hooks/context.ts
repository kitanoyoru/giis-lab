import { pixelize } from "../utils";

type DralwerProps = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
};

export type Printer = (props: DralwerProps) => void;
export type UltimateContexter = (printer: Printer) => void;
export type UltimateContexterProducer = (
  props: DralwerProps,
) => UltimateContexter;

export const ContexterProducer: UltimateContexterProducer =
  (props: DralwerProps) => (printer: Printer) => {
    printer({ canvas: props.canvas, context: props.context });
  };

CanvasRenderingContext2D.prototype.drawPixel = (x: number, y: number) => {
  const { x: _x, y: _y, width, height } = pixelize({ x, y, pixelsize: 10 });
  this.fillRect(_x, _y, width, height);
  console.log(`PIXEL ON [${x}:${y}]  [${_x}:${_y}]`);
};
