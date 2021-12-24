import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { AddProject } from "../AddProject";
import { Projects } from "../Projects";

export const Sidebar = ({ onSetTasksTitle }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [active, setActive] = useState("inbox");

  useEffect(() => {

  });
  
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li
          onClick={() => {
            setActive("inbox");
            onSetTasksTitle("Inbox");
          }}
          className={active === "inbox" ? "active" : undefined}
        >
          <FaInbox />
          <span>Inbox</span>
        </li>
        <li
          onClick={() => {
            setActive("today");
            onSetTasksTitle("Today");
          }}
          className={active === "today" ? "active" : undefined}
        >
          <FaRegCalendar />
          <span>Today</span>
        </li>
        <li
          onClick={() => {
            setActive("next-week");
            onSetTasksTitle("Next 7 days");
          }}
          className={active === "next-week" ? "active" : undefined}
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
      {showProjects && <Projects onSetTasksTitle={onSetTasksTitle} />}
      {showProjects && <AddProject />}
    </div>
  );
};
