function addUser() {
    username = document.getElementById("Username_Input").value;

    localStorage.setItem("username", username);
    
    window.location.replace("kwitter_room.html");
}