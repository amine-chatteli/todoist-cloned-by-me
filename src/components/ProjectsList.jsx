import React from "react";

export const ProjectsList = ({
  onSetTaskProject,
  onSetShowProjectsList,
  showProjectsList,
  projects
}) => {
  
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
