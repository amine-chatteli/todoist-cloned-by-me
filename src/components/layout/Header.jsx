import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { useQuickAddTaskValue } from "../../context";
import { QuickAddTask } from "../../context/quickAddTaskContext";

export const Header = () => {
  const { showQuickAddTask, setShowQuickAddTask } = useQuickAddTaskValue();
  return (
    <>
      <div className="header" data-testid="header">
        <nav>
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <ul className="options">
            <li>
              <button
                className="options__add"
                type="button"
                onClick={() => setShowQuickAddTask(!showQuickAddTask)}
              >
                +
              </button>
            </li>
            <li>
              <button className="options__dark__mode" type="button">
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
