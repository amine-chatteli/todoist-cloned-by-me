import React, { useState } from "react";
import { useQuickAddTaskValue } from "../context";
import { UseActiveProjectValue } from "../context/activeProjectContext";
import { useTasks } from "../hooks/index";
import { AddTask } from "./AddTask";
import { AddTaskButton } from "./AddTaskButton";
import { QuickAddTask } from "./QuickAddTask";
import { SingleTask } from "./SingleTask";

export const Tasks = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const { showQuickAddTask } = useQuickAddTaskValue();
  const { activeProject } = UseActiveProjectValue();
  const { tasks } = useTasks(activeProject.id);

  return (
    <div className="tasks">
      <p className="tasks__title">{activeProject.name}</p>
      <ul className="taskname__list">
        {tasks.map((task) => (
          <SingleTask {...task} key={task.id} />
        ))}
      </ul>
      {showAddTask && (
        <AddTask
          onSetShowAddTask={setShowAddTask}
          showAddTask={showAddTask}
          activeProject={activeProject}
        />
      )}
      {!showAddTask && (
        <AddTaskButton
          onSetShowAddTask={setShowAddTask}
          showAddTask={showAddTask}
        />
      )}
      {showQuickAddTask && <QuickAddTask activeProject={activeProject} />}
    </div>
  );
};
