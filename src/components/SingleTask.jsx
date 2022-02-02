import { useState } from "react/cjs/react.development";
import { firebase } from "../firebase";

export const SingleTask = ({ taskName, id }) => {
  const [deleted, setDeleted] = useState();

  const archiveTask = (docId) => {
    setTimeout(() => {
      firebase.firestore().collection("tasks").doc(`${docId}`).update({
        archived: true,
      });
    }, 1000);
  };
  return (
    <li className="single__task">
      <input
        type="checkbox"
        className="hideme"
        id={id}
        onClick={() => {
          setDeleted(id);
          archiveTask(id);
        }}
      />
      <label className="woo" htmlFor={id}>
        <span className={deleted === id ? "strike" : ""}>{taskName}</span>
      </label>
    </li>
  );
};
