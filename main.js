function addUser(){
  
    user_name = document.getElementById("name_input").value;

    localStorage.setItem("User", user_name);

    window.location ="Ooter_room.html";
}