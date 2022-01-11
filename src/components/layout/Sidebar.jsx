import React, { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { useProjects } from "../../hooks";
import { Projects } from "../Projects";

export const Sidebar = ({ onSetActiveProject, activeProject }) => {
  const [showProjects, setShowProjects] = useState(true);
  const { projects, setProjects } = useProjects();
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
          projects={projects}
          onSetActiveProject={onSetActiveProject}
          activeProject={activeProject}
          onsetProjects={(projects) => setProjects(projects)}
        />
      )}
    </div>
  );
};
