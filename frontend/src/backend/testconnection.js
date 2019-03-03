import firebase from "./firebase";

export async function addToCollection() {
  try {
    const docRef = await firebase
      .firestore()
      .collection("test")
      .add({
        name: "Eli",
        country: "Sweden"
      });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export function test() {
  console.log("test");
}
