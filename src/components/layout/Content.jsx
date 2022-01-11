import React, { useState } from "react";
import { useProjects } from "../../hooks";
import { Tasks } from "../Tasks";
import { Sidebar } from "./Sidebar";

export const Content = ({ showQuickAddTask, onSetShowQuickAddTask }) => {
  const [activeProject, setActiveProject] = useState({
    id: "INBOX",
    name: "Inbox",
  });
  const { projects, setProjects } = useProjects();
  return (
    <div className="content">
      <Sidebar
        onSetActiveProject={(activeProject) => setActiveProject(activeProject)}
        activeProject={activeProject}
      />
      <Tasks
        projects={projects}
        showQuickAddTask={showQuickAddTask}
        onSetShowQuickAddTask={onSetShowQuickAddTask}
        activeProject={activeProject}
      />
    </div>
  );
};
