import { useDispatch } from "../../hooks/redux";
import { AlgorithmType } from "../../model/algorithm";
import { setSelectedAlgorithm } from "../../store/selectedAlgorithmSlice";
import { FC } from "react";

/*
import DDAIcon from "../../public/DDAIcon.svg";
import BresenhamIcon from "../../public/BresenhamIcon.svg";
import WuIcon from "../../public/WuIcon.svg";
*/

interface IProps {
  containerClassName: string;
  buttonClassName: string;
}

export const AlgorithmSelector: FC<IProps> = ({
  containerClassName,
  buttonClassName,
}) => {
  const dispatch = useDispatch();

  const onClick = (newAlgorithm: AlgorithmType) => {
    dispatch(setSelectedAlgorithm({ algorithm: newAlgorithm }));
  };

  return (
    <ul className={containerClassName}>
      <li
        className={buttonClassName}
        onClick={() => onClick(AlgorithmType.DDA)}
      >
        DDA (Digital Differential Analyzer)
      </li>
      <li
        className={buttonClassName}
        onClick={() => onClick(AlgorithmType.BRESENHAM)}
      >
        Bresenham's line algorithm
      </li>
      <li className={buttonClassName} onClick={() => onClick(AlgorithmType.WU)}>
        Wu's line algorithm
      </li>
    </ul>
  );
};
