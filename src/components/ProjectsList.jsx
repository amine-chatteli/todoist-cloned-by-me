import React from "react";
import { useProjects } from "../hooks/index";

export const ProjectsList = () => {
  const  projects = [{ name: "amine" }] 
  return (
    <ul className="drop__down project">
      {projects.map((project) => (
        <li>{project.name}</li>
      ))}
    </ul>
  );
};
