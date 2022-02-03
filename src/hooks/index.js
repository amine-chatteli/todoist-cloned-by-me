import { useState, useEffect } from "react";
import { firebaseConfig } from "../firebase";
import { collatedTasks } from "../constants/index";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import moment from "moment";

const collatedTasksExist = (selectedProject) =>
  collatedTasks.find((task) => task.key === selectedProject);

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [user] = useAuthState(firebase.auth());

  useEffect(
    (uid) => {
      firebaseConfig
        .firestore()
        .collection("projects")
        .where("userId", "==", user.uid)
        .orderBy("projectId")
        .get()
        .then((snapshot) => {
          const allProjects = snapshot.docs.map((project) => ({
            ...project.data(),
            docId: project.id,
          }));

          if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
            setProjects(allProjects);
          }
        });
    },
    [projects]
  );

  return { projects, setProjects };
};

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const [user] = useAuthState(firebase.auth());

  useEffect(() => {
    let unsubscribe = firebaseConfig
      .firestore()
      .collection("tasks")
      .where("userId", "==", user.uid);

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};
