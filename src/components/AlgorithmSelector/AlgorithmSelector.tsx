import { useDispatch, useSelector } from "@hooks/redux";
import { ToolType } from "@model/tool";
import { AlgorithmType } from "@model/algorithm";
import { setSelectedAlgorithm } from "@store/selectedAlgorithmSlice";
import { selectSelectedTool } from "@store/selectedToolSlice";

import DDAIcon from "@public/DDAIcon.svg";
import BresenhamIcon from "@public/BresenhamIcon.svg";
import WuIcon from "@public/WuIcon.svg";

export const ToolPanel = () => {
  const dispatch = useDispatch();

  const onClick = (newAlgorithm: AlgorithmType) => {
    dispatch(setSelectedAlgorithm({ algorithm: newAlgorithm }));
  };

  const selectedTool = useSelector(selectSelectedTool);

  if (selectedTool != ToolType.LINE) {
    return;
  }

  return (
    <div>
      <button onClick={() => onClick(AlgorithmType.DDA)}>
        <DDAIcon />
      </button>
      <button onClick={() => onClick(AlgorithmType.BRESENHAM)}>
        <BresenhamIcon />
      </button>
      <button onClick={() => onClick(AlgorithmType.WU)}>
        <WuIcon />
      </button>
    </div>
  );
};
