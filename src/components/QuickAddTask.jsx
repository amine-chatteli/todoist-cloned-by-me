import React from "react";
import { AddTask } from "./AddTask";

export const QuickAddTask = ({
  activeProject,
}) => {
  return (
    <div className="quick__add__task">
      <div className="quick__add__task__popup">
        <AddTask
          header
          activeProject={activeProject}
        />
      </div>
    </div>
  );
};
