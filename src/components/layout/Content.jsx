import React, { useState } from "react";
import { Tasks } from "../Tasks";
import { Sidebar } from "./Sidebar";

export const Content = () => {
  return (
    <div className="content">
      <Sidebar />
      <Tasks />
    </div>
  );
};
