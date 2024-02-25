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
  reducers: { addNewColor: (color: HEXColor) => number };
}

// TODO: i think better to store palette in rtk store
export const useColor = (contexter: UltimateContexter): UseColorReturn => {
  const [selectedColor, setSelectedColor] = useState<HEXColor>();

  const changeColor = useCallback(
    (newColor: HEXColor) => {
      setSelectedColor(newColor);
      contexter(({ context }) => {
        context.fillStyle = newColor;
      });
    },
    [contexter],
  );

  useEffect(() => {
    changeColor(colorPalette[0].color);
  }, [contexter, changeColor]);

  return {
    pallete: colorPalette.map((c) => ({
      color: c.color,
      selectThisColor: () => changeColor(c.color),
      isSelected: selectedColor === c.color,
    })),
    reducers: {
      addNewColor: (color: HEXColor) =>
        colorPalette.push({ color, style: `bg-[#${color}]` }),
    },
  };
};
