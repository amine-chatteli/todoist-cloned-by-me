import React from "react";
import { useProjects } from "../hooks";
import { SingleProject } from "./SingleProject";

export const Projects = () => {
  const { projects, setProjects } = useProjects();
  return (
    <ul className="projects">
      {projects &&
        projects.map((project) => (
          <li>
            <SingleProject {...project} />
          </li>
        ))}
    </ul>
  );
};
