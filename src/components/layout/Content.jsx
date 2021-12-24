import React, { useState } from "react";
import { Tasks } from "../Tasks";
import { Sidebar } from "./Sidebar";

export const Content = ({ showQuickAddTask, onSetShowQuickAddTask }) => {
  const [tasksTitle, setTasksTitle] = useState("Inbox");
  return (
    <div className="content">
      <Sidebar onSetTasksTitle={(title) => setTasksTitle(title)} />
      <Tasks
        showQuickAddTask={showQuickAddTask}
        onSetShowQuickAddTask={onSetShowQuickAddTask}
        tasksTitle={tasksTitle}
      />
    </div>
  );
};
