import React, { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { Projects } from "../Projects";

export const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(false);
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li>
          <FaInbox />
          <span>Inbox</span>
        </li>
        <li>
          <FaRegCalendar />
          <span>Today</span>
        </li>
        <li>
          <FaRegCalendarAlt />
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className="projects__toggle">
        <button onClick={() => setShowProjects(!showProjects)}>
          <FaChevronDown />
        </button>
        <span>Projects</span>
      </div>
      {showProjects && <Projects />}
    </div>
  );
};
