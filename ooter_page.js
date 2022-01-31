//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("User");
room_name = localStorage.getItem("Room Name");

function send(){
    msg = document.getElementById("msg_input").value;
    firebase.database().ref(room_name).push({
        Name:user_name,
        Message: msg,
        Like: 0
    });
    document.getElementById("msg_input").value = "";
}




function logOut(){
    window.location= "index.html";
    localStorage.removeItem("User");
    localStorage.removeItem("Room Name");
}

function Back(){
    window.location= "Ooter_room.html";
    localStorage.removeItem("Room Name");
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
  
    message_data = childData;
   
console.log(firebase_message_id);
console.log(message_data);
Names = message_data['Name'];
Messages = message_data['Message'];
Likes = message_data['Like'];
names_tag = "<h4>"+Names + "<img src='tick.png' style='width:26px;'></h4>";
message_tag= "<h4>"+Messages+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+Likes+" onclick='updateLikes(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+Likes+"</span></button><hr>";

row= names_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML += row;


 } });  }); }
getData();

function updateLikes(message_id){
    console.log("clicked on the like button-" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_Likes = Number(likes) + 1;
    console.log(update_Likes);

    firebase.database().ref(room_name).child(message_id).update({
        Like : update_Likes
    });
}