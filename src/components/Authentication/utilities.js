import firebase from "firebase";

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogleProvider = async () => {
  try {
    await firebase.auth().signInWithRedirect(provider);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

export const registerWithEmailAndPassword = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    console.log('yesss');
    const res=await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(res, 'hiiiiiiiiii');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  firebase.auth().signOut();
};
