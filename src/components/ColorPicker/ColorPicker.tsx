import cn from "classnames";

import { UltimateContexter } from "../../hooks/context";
import { useColor } from "../../hooks/canvas/useColor";
import { FC } from "react";

interface IProps {
  draw: UltimateContexter;
}

export const ColorPicker: FC<IProps> = ({ draw }) => {
  const { pallete } = useColor(draw);

  return (
    <div className="panel relative flex items-center px-2 pt-2">
      {pallete.map((c) => (
        <button
          key={c.color}
          onClick={c.selectThisColor}
          style={{ backgroundColor: c.color }}
          className={cn(
            "h-4 w-4 border border-indigo-400 transition-all duration-100 ease-in hover:border-[1.5px]",
            {
              ["border-[1.5px]"]: c.isSelected,
            },
          )}
        ></button>
      ))}
    </div>
  );
};
