//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

document.getElementById("displayRoom").innerHTML = "#" + room_name;

function send() {
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message,
            like: 0
      });

      document.getElementById("message").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
