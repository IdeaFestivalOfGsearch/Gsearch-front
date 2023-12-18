const homebtn = document.getElementById("home-logo");
const profilebtn = document.getElementById("profile-square"); 
const findbtn = document.getElementsByClassName("find");
const quest = document.getElementsByClassName("quest-page")

const gomain = () => {
    window.location.href="index.html";
}

const goprofile = () => {
    location.href="login.html";
}

homebtn.addEventListener("click",gomain);
profilebtn.addEventListener("click",goprofile);
