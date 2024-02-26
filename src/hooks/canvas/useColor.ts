import { useCallback, useEffect, useState } from "react";
import { UltimateContexter } from "../../hooks/context";

type HEXColor = `#${string}`;
type TailwindColorStyle = `bg-[${HEXColor}]`;

const colorPalette: { color: HEXColor; style: TailwindColorStyle }[] = [
  { color: "#756AB6", style: "bg-[#756AB6]" },
  { color: "#AC87C5", style: "bg-[#AC87C5]" },
  { color: "#E0AED0", style: "bg-[#E0AED0]" },
  { color: "#FFE5E5", style: "bg-[#FFE5E5]" },
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
