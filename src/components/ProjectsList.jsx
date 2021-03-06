import React from "react";
import { UseProjectsValue } from "../context";

export const ProjectsList = ({
  onSetTaskProject,
  onSetShowProjectsList,
  showProjectsList,
}) => {
  const { projects } = UseProjectsValue();
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
