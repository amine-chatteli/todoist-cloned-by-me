import { createContext, useContext } from "react";

export const QuickAddTask = createContext();
export const QuickAddTaskProvider = ({
  children,
  showQuickAddTask,
  setShowQuickAddTask,
}) => {
  return (
    <QuickAddTask.Provider value={{ showQuickAddTask, setShowQuickAddTask }}>
      {children}
    </QuickAddTask.Provider>
  );
};

export const useQuickAddTaskValue = () => useContext(QuickAddTask);
