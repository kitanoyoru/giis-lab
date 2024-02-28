import { FC } from "react";
import { useDispatch } from "../../hooks/redux";
import { ToolType } from "../../model/tool";
import { setSelectedTool } from "../../store/selectedToolSlice";

interface IProps {
  containerClassName: string;
  buttonClassName: string;
}

export const ToolPanel: FC<IProps> = ({
  containerClassName,
  buttonClassName,
}) => {
  const dispatch = useDispatch();

  const onClick = (newTool: ToolType) => {
    dispatch(setSelectedTool({ tool: newTool }));
  };

  return (
    <ul className={containerClassName}>
      <li className={buttonClassName} onClick={() => onClick(ToolType.LINE)}>
        Line
      </li>
      <li className={buttonClassName} onClick={() => onClick(ToolType.CIRCLE)}>
        Circle
      </li>
      <li className={buttonClassName} onClick={() => onClick(ToolType.ELLIPSE)}>
        Ellipse
      </li>
      <li
        className={buttonClassName}
        onClick={() => onClick(ToolType.HYPERBOLA)}
      >
        Hyperbola
      </li>
      <li
        className={buttonClassName}
        onClick={() => onClick(ToolType.PARABOLA)}
      >
        Parabola
      </li>
    </ul>
  );
};
