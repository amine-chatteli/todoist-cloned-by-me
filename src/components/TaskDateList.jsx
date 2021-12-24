import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from "react-icons/fa";

export const TaskDateList = () => {
  return (
    <ul className="drop__down date__list">
      <li>
        <FaSpaceShuttle />
        <span>Today</span>
      </li>
      <li>
        <FaSun />
        <span>Tomorrow</span>
      </li>
      <li className="last">
        <FaRegPaperPlane />
        <span>Next Week</span>
      </li>
    </ul>
  );
};
