import React, { useState } from "react";
import { Tasks } from "../Tasks";
import { Sidebar } from "./Sidebar";

export const Content = () => {
  const [tasksTitle, setTasksTitle] = useState("Inbox");
  return (
    <div className="content">
      <Sidebar onSetTasksTitle={(title) => setTasksTitle(title)} />
      <Tasks tasksTitle={tasksTitle} />
    </div>
  );
};
