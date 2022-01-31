import { createContext, useContext } from "react";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children, projects, setProjects }) => {
  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const UseProjectsValue = () => useContext(ProjectsContext);
