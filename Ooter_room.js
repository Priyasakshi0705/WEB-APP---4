var firebaseConfig = {
    apiKey: "AIzaSyD9TDdVSDxKGFaLzQk_wQ16ft9wNKGhiSQ",
    authDomain: "ooter-150fe.firebaseapp.com",
    databaseURL: "https://ooter-150fe-default-rtdb.firebaseio.com",
    projectId: "ooter-150fe",
    storageBucket: "ooter-150fe.appspot.com",
    messagingSenderId: "52919974202",
    appId: "1:52919974202:web:7f915d8ba01dc2fec5b803"
  };
  

firebase.initializeApp(firebaseConfig);

var user_name= localStorage.getItem("User");
document.getElementById("welcome_user").innerHTML= user_name;

function addRoom(){
var Room_names = document.getElementById("room_input").value;
firebase.database().ref("/").child(Room_names).update({
      Purpose:"Adding_room_names"
});

localStorage.setItem("Room Name", Room_names);
document.getElementById("room_input").value= "";

window.location = "ooter_page.html";
}

function logOut(){

  localStorage.removeItem("User");
  localStorage.removeItem("Room Name");
  window.location ="index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(chosen_room){
  console.log("Room name chosen is-"+ chosen_room);
  localStorage.setItem("Room Name", chosen_room);
  window.location= "Ooter_page.html";
}