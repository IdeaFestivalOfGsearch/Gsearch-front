document.addEventListener('DOMContentLoaded', function() {
const homebtn = document.getElementById("home-logo");
const profilebtn = document.getElementById("profile-square"); 
const findbtn = document.getElementById("find");
const modal = document.getElementById("pack");
const exitbtn = document.getElementById("exitbtn");

function gomain(){
    location.href="index.html";
}

function goprofile(){
    location.href="login.html";
}

function showmodal(){
    modal.classList.remove('hidden');
}

function hidemodal(){
    modal.classList.add('hidden');
}

homebtn.addEventListener("click",gomain);
profilebtn.addEventListener("click",goprofile);
findbtn.addEventListener("click",showmodal);
exitbtn.addEventListener("click",hidemodal);
});