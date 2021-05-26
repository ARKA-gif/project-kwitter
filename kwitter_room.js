
//ADD YOUR FIREBASE LINKS HERE
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


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() 
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      
            purpose: "Adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";  
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name" + Room_names);
      row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirect_toRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirect_toRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter.html"
}
