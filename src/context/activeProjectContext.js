import { createContext, useContext } from "react";

export const ActiveProjectContext = createContext();
export const ActiveProjectProvider = ({
  children,
  activeProject,
  setActiveProject,
}) => {
  return (
    <ActiveProjectContext.Provider value={{ activeProject, setActiveProject }}>
      {children}
    </ActiveProjectContext.Provider>
  );
};

export const UseActiveProjectValue = () => useContext(ActiveProjectContext);
