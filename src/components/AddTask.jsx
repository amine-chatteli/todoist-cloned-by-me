import { useState } from "react";
import { FaRegListAlt, FaRegCalendarAlt } from "react-icons/fa";
import { ProjectsList } from "./ProjectsList";
import { TaskDateList } from "./TaskDateList";
import firebase from "firebase";
import moment from "moment";

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
  const [taskProject, setTaskProject] = useState();
  const [taskDate, setTaskDate] = useState();

  const addNewTask = () => {
    const projectId = taskProject;
    let collatedDate = "";

    if (projectId === "TODAY") {
      collatedDate = moment().format("DD/MM/YYYY");
    } else if (projectId === "NEXT_7") {
      collatedDate = moment().add(7, "days").format("DD/MM/YYYY");
    }

    return (
      taskName &&
      projectId &&
      firebase
        .firestore()
        .collection("tasks")
        .add({
          archived: false,
          projectId,
          taskName,
          date: collatedDate || taskDate,
          userId: "jlIFXIwyAL3tzHMtzRbw",
        })
        .then(() => {
          setTaskName("");
          setTaskProject("");
          onSetShowAddTask(false);
        })
    );
  };
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
          <button className="generic__button" onClick={() => addNewTask()}>
            Add Task
          </button>
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
        {showProjectsList && (
          <ProjectsList
            showProjectsList={showProjectsList}
            onSetTaskProject={(project) => setTaskProject(project)}
            onSetShowProjectsList={() => setShowProjectsList()}
          />
        )}
        {showTaskDate && (
          <TaskDateList
            onSetShowTaskDate={() => setShowTaskDate()}
            showTaskDate={showTaskDate}
            onSetTaskDate={(date) => setTaskDate(date)}
          />
        )}
      </div>
    </div>
  );
};
