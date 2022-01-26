import React from "react";
import { AddTask } from "./AddTask";

export const QuickAddTask = ({
  activeProject,
  projects,
}) => {
  return (
    <div className="quick__add__task">
      <div className="quick__add__task__popup">
        <AddTask
          header
          activeProject={activeProject}
          projects={projects}
        />
      </div>
    </div>
  );
};
