import React, { useState } from "react";
import { useQuickAddTaskValue } from "../context";
import { useTasks } from "../hooks/index";
import { AddTask } from "./AddTask";
import { AddTaskButton } from "./AddTaskButton";
import { QuickAddTask } from "./QuickAddTask";
import { SingleTask } from "./SingleTask";

export const Tasks = ({ activeProject, projects }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const { tasks } = useTasks(activeProject.id);
  const { showQuickAddTask } = useQuickAddTaskValue();
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
          projects={projects}
        />
      )}
      {!showAddTask && (
        <AddTaskButton
          onSetShowAddTask={setShowAddTask}
          showAddTask={showAddTask}
        />
      )}
      {showQuickAddTask && (
        <QuickAddTask activeProject={activeProject} projects={projects} />
      )}
    </div>
  );
};
