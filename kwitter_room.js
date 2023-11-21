
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA5Kvzm_tYY8QvNBWENM49IcMvhV5NQpPk",
      authDomain: "kwitter-2bf0e.firebaseapp.com",
      databaseURL: "https://kwitter-2bf0e-default-rtdb.firebaseio.com",
      projectId: "kwitter-2bf0e",
      storageBucket: "kwitter-2bf0e.appspot.com",
      messagingSenderId: "1034868371888",
      appId: "1:1034868371888:web:7235038f2ade342dc46675",
      measurementId: "G-L895YS9KD7"
};

firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");

document.getElementById("user_name").innerHTML = "Welcome " + username + " !";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log("Room Name - " + Room_names);

                  row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'>#" + Room_Names + "</div><hr>";

                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
