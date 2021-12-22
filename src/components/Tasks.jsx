import React from "react";

export const Tasks = ({ tasksTitle }) => {
  return (
    <div className="tasks">
      <p className="title">{tasksTitle}</p>
    </div>
  );
};
