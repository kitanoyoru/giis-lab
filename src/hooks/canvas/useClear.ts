import { Printer } from "../../hooks/context";

export const useClear = () => {
  const clear: Printer = ({ context, canvas }) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return {
    clear,
  };
};
