import react, { useState } from "react";
import { FaRegListAlt, FaRegCalendarAlt } from "react-icons/fa";
import { ProjectsList } from "./ProjectsList";
import { TaskDateList } from "./TaskDateList";

export const AddTask = () => {
  const [showAddTask, SetShowAddTask] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [showTaskDate, setShowTaskDate] = useState(false);
  const [showProjectsList, setShowProjectsList] = useState(false);

  const addTask = () => {};
  return (
    <>
      {showAddTask && (
        <div className="add__project__form task">
          <input
            type="text"
            placeholder="add a task here!"
            value={taskName}
            onChange={({ target: { value } }) => setTaskName(value)}
          />
          <div className="controls">
            <div className="add__buttons">
              <button onClick={() => addTask()}>Add Task</button>
              <span onClick={() => SetShowAddTask(!showAddTask)}>Cancel</span>
            </div>
            <div className="icons">
              <FaRegCalendarAlt
                onClick={() => setShowTaskDate(!showTaskDate)}
              />
              <FaRegListAlt
                onClick={() => setShowProjectsList(!showProjectsList)}
              />
            </div>
          </div>
          {showProjectsList && <ProjectsList />}
          {showTaskDate && <TaskDateList />}
        </div>
      )}
      {!showAddTask && (
        <div className="add__project__button task">
          <span className="plus">+</span>
          <span
            className="add__text"
            onClick={() => SetShowAddTask(!showAddTask)}
          >
            Add Task
          </span>
        </div>
      )}
    </>
  );
};
