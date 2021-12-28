import React from "react";
import { useProjects } from "../hooks";

export const ProjectsList = ({ onSetTaskProject }) => {
  const { projects } = useProjects();
  return (
    <ul className="drop__down projects__list">
      {projects.map((project) => (
        <li onClick={() => onSetTaskProject(project.projectId)}>{project.name}</li>
      ))}
    </ul>
  );
};
