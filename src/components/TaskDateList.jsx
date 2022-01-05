import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from "react-icons/fa";
import moment from "moment";

export const TaskDateList = ({
  onSetTaskDate,
  onSetShowTaskDate,
  showTaskDate,
}) => {
  return (
    <ul className="drop__down date__list">
      <li
        onClick={() => {
          onSetTaskDate(moment().format("DD/MM/YYYY"));
          onSetShowTaskDate(!showTaskDate);
        }}
      >
        <FaSpaceShuttle />
        <span>Today</span>
      </li>
      <li
        onClick={() => {
          onSetTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
          onSetShowTaskDate(!showTaskDate);
        }}
      >
        <FaSun />
        <span>Tomorrow</span>
      </li>
      <li
        className="last"
        onClick={() => {
          onSetTaskDate(moment().add(7, "days").format("DD/MM/YYYY"));
          onSetShowTaskDate(!showTaskDate);
        }}
      >
        <FaRegPaperPlane />
        <span>Next Week</span>
      </li>
    </ul>
  );
};
