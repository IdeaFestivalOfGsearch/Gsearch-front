const homebtn = document.getElementById("home-logo");
const profilebtn = document.getElementById("profile-square"); 

function gohome(){
    location.href="index.html";
}

function goprofile(){
     location.href="login.html";
}

homebtn.addEventListener("click",gohome());
profilebtn.addEventListener("click",goprofile());