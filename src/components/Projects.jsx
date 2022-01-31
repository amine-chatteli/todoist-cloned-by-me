import { UseProjectsValue } from "../context";
import { AddProject } from "./AddProject";
import { SingleProject } from "./SingleProject";

export const Projects = () => {
  const { projects, setProjects } = UseProjectsValue();
  return (
    <>
      <div className="projects">
        {projects &&
          projects.map((project) => (
            <SingleProject
              {...project}
              key={project.projectId}
            />
          ))}
      </div>
      <AddProject onsetProjects={setProjects} />
    </>
  );
};
