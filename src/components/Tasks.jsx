import React, { useState } from "react";
import { useTasks } from "../hooks/index";
import { AddTask } from "./AddTask";
import { AddTaskButton } from "./AddTaskButton";
import { QuickAddTask } from "./QuickAddTask";
import { SingleTask } from "./SingleTask";

export const Tasks = ({
  activeProject,
  showQuickAddTask,
  onSetShowQuickAddTask,
}) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const { tasks, archivedTasks } = useTasks(activeProject.id);
  console.log(tasks);

  return (
    <div className="tasks">
      <p className="tasks__title">{activeProject.name}</p>
      <ul className="taskname__list">
        {tasks.map((task) => (
          <SingleTask {...task} key={task.id} />
        ))}
      </ul>
      {showAddTask && (
        <AddTask onSetShowAddTask={setShowAddTask} showAddTask={showAddTask} />
      )}
      {!showAddTask && (
        <AddTaskButton
          onSetShowAddTask={setShowAddTask}
          showAddTask={showAddTask}
        />
      )}
      {showQuickAddTask && (
        <QuickAddTask
          onSetShowQuickAddTask={onSetShowQuickAddTask}
          showQuickAddTask={showQuickAddTask}
        />
      )}
    </div>
  );
};
