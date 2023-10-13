const homebtn = document.getElementById("home-logo");
const profilebtn = document.getElementById("profile-square"); 

function gohome(){
    location.href="index.html";
}

function goprofile(event){
    let login=1;
    if(login===1){
        location.href="login.html";
    }
    else{
        profilebtn.classList.add("hidden");
    }
}

homebtn.addEventListener("click",gohome);
profilebtn.addEventListener("click",goprofile);