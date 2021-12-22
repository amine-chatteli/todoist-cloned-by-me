import react, { useState } from "react";
import {firebase} from "../firebase"

export const AddProject = () => {
  const [showAddProject, SetshowAddProject] = useState(false);
  const [projectName, setProjectName] = useState("");
  const addProject = () => {
    projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId,
        name: projectName,
        userId: 'jlIFXIwyAL3tzHMtzRbw',
      })
      .then(() => {
        setProjects([...projects]);
        setProjectName('');
        setShow(false);
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
            <button onClick={() => addProject()}>Add project</button>
            <span onClick={() => SetshowAddProject(!showAddProject)}>
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
            onClick={() => SetshowAddProject(!showAddProject)}
          >
            Add Project
          </span>
        </div>
      )}
    </>
  );
};
