interface pixelizeParams {
  x: number;
  y: number;
  pixelsize: number;
}

interface pixelizeReturn {
  x: number;
  y: number;
  height: number;
  width: number;
}

type pixelize = (params: pixelizeParams) => pixelizeReturn;

export const pixelize: pixelize = ({ x, y, pixelsize }) => {
  return {
    x: Math.floor(x / pixelsize) * pixelsize,
    y: Math.floor(y / pixelsize) * pixelsize,
    height: pixelsize,
    width: pixelsize,
  };
};
