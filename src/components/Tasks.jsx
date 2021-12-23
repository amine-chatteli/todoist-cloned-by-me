import React from "react";
import { AddTask } from "./AddTask";

export const Tasks = ({ tasksTitle }) => {
  return (
    <div className="tasks">
      <p className="title">{tasksTitle}</p>
      <AddTask />
    </div>
  );
};
