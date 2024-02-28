import { Printer } from "../../hooks/context";

interface useClearReturn {
  clear: Printer;
}

export const useClear = (): useClearReturn => {
  const clear: Printer = ({ context, canvas }) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return {
    clear,
  };
};
