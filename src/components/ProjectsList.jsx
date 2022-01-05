import React from "react";
import { useProjects } from "../hooks";

export const ProjectsList = ({
  onSetTaskProject,
  onSetShowProjectsList,
  showProjectsList,
}) => {
  const { projects } = useProjects();
  return (
    <ul className="drop__down projects__list">
      {projects.map((project) => (
        <li
          key={project.projectId}
          onClick={() => {
            onSetShowProjectsList(!showProjectsList);
            onSetTaskProject(project.projectId);
          }}
        >
          {project.name}
        </li>
      ))}
    </ul>
  );
};
