import React from "react";
import { AddTask } from "./AddTask";

export const QuickAddTask = ({ onSetShowQuickAddTask, showQuickAddTask }) => {
  return (
    <div className="quick__add__task">
      <div className="quick__add__task__popup">
        <AddTask
          header
          onSetShowQuickAddTask={onSetShowQuickAddTask}
          showQuickAddTask={showQuickAddTask}
        />
      </div>
    </div>
  );
};
