import { AddProject } from "./AddProject";
import { SingleProject } from "./SingleProject";

export const Projects = ({ onSetActiveProject, activeProject, projects,onsetProjects }) => {
  return (
    <>
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
      <AddProject onsetProjects={onsetProjects} />
    </>
  );
};
