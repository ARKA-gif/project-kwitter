// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBLE7ApKzJ6cgEswZz6hmkMwTPY5xZ37K0",
    authDomain: "kwitter-social-website-a7d69.firebaseapp.com",
    databaseURL: "https://kwitter-social-website-a7d69-default-rtdb.firebaseio.com",
    projectId: "kwitter-social-website-a7d69",
    storageBucket: "kwitter-social-website-a7d69.appspot.com",
    messagingSenderId: "711791813174",
    appId: "1:711791813174:web:c2082ed4a5e9b272032e97"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
function addUser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
