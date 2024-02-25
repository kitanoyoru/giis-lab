import { useDispatch } from "../../hooks/redux";
import { ToolType } from "../../model/tool";
import { setSelectedTool } from "../../store/selectedToolSlice";

import LineIcon from "../../public/LineIcon.svg";
import CircleIcon from "../../public/CircleIcon.svg";
import EllipseIcon from "../../public/EllipseIcon.svg";

export const ToolPanel = () => {
  const dispatch = useDispatch();

  const onClick = (newTool: ToolType) => {
    dispatch(setSelectedTool({ tool: newTool }));
  };

  return (
    <div>
      <button onClick={() => onClick(ToolType.LINE)}>
        <LineIcon />
      </button>
      <button onClick={() => onClick(ToolType.CIRCLE)}>
        <CircleIcon />
      </button>
      <button onClick={() => onClick(ToolType.ELLIPSE)}>
        <EllipseIcon />
      </button>
    </div>
  );
};
