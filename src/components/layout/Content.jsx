import React, { useState } from "react";
import { Tasks } from "../Tasks";
import { Sidebar } from "./Sidebar";

export const Content = ({ showQuickAddTask, onSetShowQuickAddTask }) => {
  const [activeProject, setActiveProject] = useState({
    id: "INBOX",
    name: "Inbox",
  });
  return (
    <div className="content">
      <Sidebar
        onSetActiveProject={(activeProject) => setActiveProject(activeProject)}
        activeProject={activeProject}
      />
      <Tasks
        showQuickAddTask={showQuickAddTask}
        onSetShowQuickAddTask={onSetShowQuickAddTask}
        activeProject={activeProject}
      />
    </div>
  );
};
