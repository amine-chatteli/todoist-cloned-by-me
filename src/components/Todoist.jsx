import React from "react";
import { useState } from "react";
import { Content } from "../components/layout/Content";
import { Header } from "../components/layout/Header";
import { ProjectsProvider, QuickAddTaskProvider } from "../context";
import { ActiveProjectProvider } from "../context/activeProjectContext";
import { useProjects } from "../hooks";

export const Todoist = () => {
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const { projects, setProjects } = useProjects();
  const [activeProject, setActiveProject] = useState({
    id: "INBOX",
    name: "Inbox",
  });
  return (
    <QuickAddTaskProvider
      showQuickAddTask={showQuickAddTask}
      setShowQuickAddTask={setShowQuickAddTask}
    >
      <ProjectsProvider projects={projects} setProjects={setProjects}>
        <ActiveProjectProvider
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        >
          <Header />
          <Content />
        </ActiveProjectProvider>
      </ProjectsProvider>
    </QuickAddTaskProvider>
  );
};
