import React from "react";

export const ProjectsList = () => {
  const projects = [
    { name: "amine" },
    { name: "amine" },
    { name: "amine" },
    { name: "amine" },
  ];
  return (
    <ul className="drop__down projects__list">
      {projects.map((project) => (
        <li>{project.name}</li>
      ))}
    </ul>
  );
};
