import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDnxwBd0UISptICSXp00e6epcQED9QVHnw",
  authDomain: "partyapp-e5dd6.firebaseapp.com",
  databaseURL: "https://partyapp-e5dd6.firebaseio.com",
  projectId: "partyapp-e5dd6",
  storageBucket: "partyapp-e5dd6.appspot.com",
  messagingSenderId: "1033739524284"
};

const app = firebase.initializeApp(config);
export default app;
