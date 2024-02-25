import { useEffect, useRef, useState } from "react";
import { ContexterProducer, type UltimateContexter } from "../../hooks/context";

export const useDrawler = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [contexter, setContexter] = useState<UltimateContexter>();

  useEffect(() => {
    if (canvasRef.current) {
      const contexter = ContexterProducer({
        canvas: canvasRef.current,
        context: canvasRef.current.getContext("2d")!,
      });
      setContexter(contexter);
    }
  }, [canvasRef]);

  return { canvasRef, draw: contexter };
};
