import { useCallback, useEffect, useState } from "react";
import { UltimateContexter } from "../../hooks/context";

type HEXColor = `#${string}`;
type TailwindColorStyle = `bg-[${HEXColor}]`;

const colorPalette: { color: HEXColor; style: TailwindColorStyle }[] = [
  { color: "#FF0000", style: "bg-[#FF0000]" },
  { color: "#00FF00", style: "bg-[#00FF00]" },
  { color: "#0000FF", style: "bg-[#0000FF]" },
  { color: "#000000", style: "bg-[#000000]" },
  { color: "#63B3ED", style: "bg-[#63B3ED]" },
  { color: "#48BB78", style: "bg-[#48BB78]" },
  { color: "#F6E05E", style: "bg-[#F6E05E]" },
  { color: "#FCA5A5", style: "bg-[#FCA5A5]" },
];

interface UseColorReturn {
  pallete: Array<{
    color: HEXColor;
    selectThisColor: () => void;
    isSelected: boolean;
  }>;
  reducers: {
    addNewColor: (newColor: HEXColor) => number;
    changeColor: (newColor: HEXColor) => void;
  };
}

// TODO: i think better to store palette in rtk store
export const useColor = (
  ctx: UltimateContexter | undefined,
): UseColorReturn => {
  const [selectedColor, setSelectedColor] = useState<HEXColor>();

  const changeColor = useCallback(
    (newColor: HEXColor) => {
      if (ctx) {
        setSelectedColor(newColor);
        ctx(({ context }) => {
          context.fillStyle = newColor;
        });
      }
    },
    [ctx],
  );

  useEffect(() => {
    if (ctx) {
      changeColor(colorPalette[0].color);
    }
  }, [ctx, changeColor]);

  return {
    pallete: colorPalette.map((c) => ({
      color: c.color,
      selectThisColor: () => changeColor(c.color),
      isSelected: selectedColor === c.color,
    })),
    reducers: {
      addNewColor: (newColor: HEXColor) =>
        colorPalette.push({ color: newColor, style: `bg-[#${newColor}]` }),
      changeColor,
    },
  };
};
