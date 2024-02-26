import { FC } from "react";
import { useDispatch } from "../../hooks/redux";
import { ToolType } from "../../model/tool";
import { setSelectedTool } from "../../store/selectedToolSlice";

/*
import LineIcon from "../../public/LineIcon.svg";
import CircleIcon from "../../public/CircleIcon.svg";
import EllipseIcon from "../../public/EllipseIcon.svg";
*/

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
    </ul>
  );
};
