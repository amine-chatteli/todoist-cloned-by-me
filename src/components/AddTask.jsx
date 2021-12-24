import  { useState } from "react";
import { FaRegListAlt, FaRegCalendarAlt } from "react-icons/fa";
import { ProjectsList } from "./ProjectsList";
import { TaskDateList } from "./TaskDateList";

export const AddTask = ({
  onSetShowAddTask,
  showAddTask,
  header,
  onSetShowQuickAddTask,
  showQuickAddTask,
}) => {
  const [taskName, setTaskName] = useState("");
  const [showTaskDate, setShowTaskDate] = useState(false);
  const [showProjectsList, setShowProjectsList] = useState(false);

  const addTask = () => {};
  return (
    <div className="add__project__form task">
      {header && (
        <div className="popup__header">
          <h5>Quick Add Task</h5>
          <span onClick={() => onSetShowQuickAddTask(!showQuickAddTask)}>
            X
          </span>
        </div>
      )}
      <input
        type="text"
        placeholder="add a task here!"
        value={taskName}
        onChange={({ target: { value } }) => setTaskName(value)}
      />
      <div className="controls">
        <div className="add__buttons">
          <button onClick={() => addTask()}>Add Task</button>
          {!header && (
            <span onClick={() => onSetShowAddTask(!showAddTask)}>Cancel</span>
          )}
        </div>
        <div className="icons">
          <FaRegCalendarAlt onClick={() => setShowTaskDate(!showTaskDate)} />
          <FaRegListAlt
            onClick={() => setShowProjectsList(!showProjectsList)}
          />
        </div>
      </div>
      <div className="dropdown__lists">
        {showProjectsList && <ProjectsList />}
        {showTaskDate && <TaskDateList />}
      </div>
    </div>
  );
};
