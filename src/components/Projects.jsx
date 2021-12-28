import { useProjects } from "../hooks";
import { SingleProject } from "./SingleProject";

export const Projects = ({ onSetActiveProject, activeProject }) => {
  const { projects } = useProjects();

  return (
    <div className="projects">
      {projects &&
        projects.map((project) => (
          <SingleProject
            activeProject={activeProject}
            {...project}
            key={project.projectId}
            onSetActiveProject={onSetActiveProject}
          />
        ))}
    </div>
  );
};
