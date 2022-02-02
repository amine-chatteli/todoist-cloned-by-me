import { useState } from "react";
import { firebase } from "../firebase";
import { useProjects } from "../hooks";
import { generatePushId } from "../helpers/index";

export const AddProject = ({ onsetProjects }) => {
  const [showAddProject, setShowAddProject] = useState(false);
  const [projectName, setProjectName] = useState("");
  const { projects } = useProjects();
  const projectId = generatePushId();
  const addProject = () => {
    projectName &&
      firebase
        .firestore()
        .collection("projects")
        .add({
          projectId,
          name: projectName,
          userId: "jlIFXIwyAL3tzHMtzRbw",
        })
        .then(() => {
          onsetProjects([...projects]);
          setProjectName("");
          setShowAddProject(false);
        });
  };
  return (
    <>
      {showAddProject && (
        <div className="add__project__form">
          <input
            type="text"
            placeholder="Name your project"
            value={projectName}
            onChange={({ target: { value } }) => setProjectName(value)}
          />
          <div className="controls">
            <button className="generic__button" onClick={() => addProject()}>
              Add project
            </button>
            <span onClick={() => setShowAddProject(!showAddProject)}>
              Cancel
            </span>
          </div>
        </div>
      )}
      {!showAddProject && (
        <div className="add__project__button">
          <span className="plus">+</span>
          <span
            className="add__text"
            onClick={() => setShowAddProject(!showAddProject)}
          >
            Add Project
          </span>
        </div>
      )}
    </>
  );
};
