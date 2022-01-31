import React, { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { UseActiveProjectValue } from "../../context/activeProjectContext";
import { Projects } from "../Projects";

export const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const {activeProject,setActiveProject}=UseActiveProjectValue()
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li
          onClick={() => {
            setActiveProject({
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
            setActiveProject({
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
            setActiveProject({
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
        <Projects />
      )}
    </div>
  );
};
