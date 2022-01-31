import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { UseActiveProjectValue } from "../context/activeProjectContext";
import { UseProjectsValue } from "../context/projectsContext";
import { firebase } from "../firebase";

export const SingleProject = ({ name, projectId, docId }) => {
  const [showDeletePopup, setShowDeletePopup] = useState("");
  const { projects, setProjects } = UseProjectsValue();
  const { activeProject, setActiveProject } = UseActiveProjectValue();

  const deleteChildTasks = (projectId) => {
    const db = firebase.firestore();
    db.collection("tasks")
      .where("projectId", "==", projectId)
      .get()
      .then(function (querySnapshot) {
        var batch = db.batch();
        querySnapshot.forEach(function (doc) {
          // For each doc, add a delete operation to the batch
          batch.delete(doc.ref);
        });

        // Commit the batch
        return batch.commit();
      });
  };

  const deleteProject = (docId, projectId) => {
    firebase
      .firestore()
      .collection("projects")
      .doc(docId)
      .delete()
      .then(() => deleteChildTasks(projectId))
      .then(() => {
        setProjects([...projects]);
        setActiveProject({
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
        setActiveProject({
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
              onClick={() => deleteProject(docId, projectId)}
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
