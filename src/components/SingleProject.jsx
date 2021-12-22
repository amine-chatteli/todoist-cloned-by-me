import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export const SingleProject = ({
  name,
  onSetActiveProject,
  projectId,
  activeProject,
  onSetTasksTitle,
}) => {
  return (
    <li
      className={
        activeProject === projectId
          ? "active single__project"
          : "single__project"
      }
      onClick={() => {
        onSetActiveProject(projectId);
        onSetTasksTitle(name);
      }}
    >
      <div className="name">
        <span className="dot"/>
        <span>{name}</span>
      </div>
      <FaTrashAlt className="delete__icon" />
    </li>
  );
};
