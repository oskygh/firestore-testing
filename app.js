const firebase = require("firebase")

 // Initialize Firebase
 const config = {
    apiKey: "AIzaSyAuUDllV-0r5ThfR3-0YH7--WB8FjKfAmw",
    authDomain: "test2-6a28d.firebaseapp.com",
    databaseURL: "https://test2-6a28d.firebaseio.com",
    projectId: "test2-6a28d",
    storageBucket: "test2-6a28d.appspot.com",
    messagingSenderId: "130999774263"
  };
firebase.initializeApp(config);
  

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
const userRef = db.collection("users").add({
  fullname: "Osborne",
  email: "osborne@gmail.com"
}) .then(
    console.log("okay")
)

console.log(userRef)