import React, { useState } from "react";
import { AddTask } from "./AddTask";
import { AddTaskButton } from "./AddTaskButton";
import { QuickAddTask } from "./QuickAddTask";

export const Tasks = ({
  tasksTitle,
  showQuickAddTask,
  onSetShowQuickAddTask,
}) => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="tasks">
      <p className="title">{tasksTitle}</p>
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
