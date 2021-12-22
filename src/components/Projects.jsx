import React, { useState, useEffect } from "react";
import { useProjects } from "../hooks";
import { SingleProject } from "./SingleProject";

export const Projects = ({onSetTasksTitle}) => {
  const { projects, setProjects } = useProjects();
  const [activeProject, setActiveProject] = useState();
  const active = projects && projects[0] && projects[0].projectId;
  useEffect(() => {
    setActiveProject(active);
  }, [active]);

  return (
    <ul className="projects">
      {projects &&
        projects.map((project) => (
          <SingleProject
            activeProject={activeProject}
            {...project}
            key={project.projectId}
            onSetActiveProject={(projectId) => setActiveProject(projectId)}
            onSetTasksTitle={onSetTasksTitle}
          />
        ))}
    </ul>
  );
};
