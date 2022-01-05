import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { AddProject } from "../AddProject";
import { Projects } from "../Projects";

export const Sidebar = ({ onSetActiveProject, activeProject }) => {
  const [showProjects, setShowProjects] = useState(false);
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li
          onClick={() => {
            onSetActiveProject({
              id: "INBOX",
              name: "Inbox",
            });
          }}
          className={activeProject.id === "INBOX" ? "active" : undefined}
        >
          <FaInbox />
          <span>Inbox</span>
        </li>
        <li
          onClick={() => {
            onSetActiveProject({
              id: "TODAY",
              name: "Today",
            });
          }}
          className={activeProject.id === "TODAY" ? "active" : undefined}
        >
          <FaRegCalendar />
          <span>Today</span>
        </li>
        <li
          onClick={() => {
            onSetActiveProject({
              id: "NEXT_7",
              name: "Next Week",
            });
          }}
          className={activeProject.id === "NEXT_7" ? "active" : undefined}
        >
          <FaRegCalendarAlt />
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className="projects__toggle">
        <button onClick={() => setShowProjects(!showProjects)}>
          <FaChevronDown className={showProjects ? "" : "flip__arrow"} />
        </button>
        <span>Projects</span>
      </div>
      {showProjects && (
        <Projects
          onSetActiveProject={onSetActiveProject}
          activeProject={activeProject}
        />
      )}
      {showProjects && <AddProject />}
    </div>
  );
};
