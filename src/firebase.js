import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC1Q1gop-aL-9y5UfFsFtU7JQJVbc1Itlg",
  authDomain: "todoist-bc53f.firebaseapp.com",
  databaseURL: "https://todoist-bc53f-default-rtdb.firebaseio.com",
  projectId: "todoist-bc53f",
  storageBucket: "todoist-bc53f.appspot.com",
  messagingSenderId: "753804658046",
  appId: "1:753804658046:web:16f725aec872f7393ddf2f",
  measurementId: "G-TN6YCTM8FJ"
});

export { firebaseConfig as firebase };