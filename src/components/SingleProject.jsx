import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export const SingleProject = ({
  name,
  onSetActiveProject,
  projectId,
  activeProject,
}) => {
  return (
    <li
      className={
        activeProject.id === projectId
          ? "active single__project"
          : "single__project"
      }
      onClick={() => {
        onSetActiveProject({
          id: projectId,
          name: name,
        });
      }}
    >
      <div className="name">
        <span className="dot" />
        <span>{name}</span>
      </div>
      <FaTrashAlt className="delete__icon" />
    </li>
  );
};
