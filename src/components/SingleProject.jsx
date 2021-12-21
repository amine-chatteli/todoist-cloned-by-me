import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export const SingleProject = ({ name }) => {
  return (
    <div className="single__project">
      <span className="name">{name}</span>
      <FaTrashAlt />
    </div>
  );
};
