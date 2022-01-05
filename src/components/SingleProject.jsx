import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { firebase } from "../firebase";
import { useProjects } from "../hooks";

export const SingleProject = ({
  name,
  onSetActiveProject,
  projectId,
  docId,
  activeProject,
}) => {
  const [showDeletePopup, setShowDeletePopup] = useState("");
  const { projects, setProjects } = useProjects();

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection("projects")
      .doc(docId)
      .delete()
      .then(() => {
        console.log(projects);
        setProjects([...projects]);
        onSetActiveProject({
          id: "INBOX",
          name: "Inbox",
        });
      });
  };
  return (
    <li
      className={
        activeProject.id === projectId
          ? "active__project single__project"
          : "single__project"
      }
      onClick={() => {
        onSetActiveProject({
          id: projectId,
          name: name,
        });
      }}
    >
      <div className="name">
        <span className="dot" />
        <span>{name}</span>
      </div>
      <FaTrashAlt
        className="delete__icon"
        onClick={() => setShowDeletePopup(projectId)}
      />
      {showDeletePopup === projectId && (
        <div className="delete__popup">
          <p>Are you sure you want to delete this project?</p>
          <div className="delete__buttons">
            <button
              className="generic__button"
              onClick={() => deleteProject(docId)}
            >
              Delete
            </button>
            <span onClick={() => setShowDeletePopup("")}>Cancel</span>
          </div>
        </div>
      )}
    </li>
  );
};
