document.addEventListener('DOMContentLoaded', function() {
const homebtn = document.getElementById("home-logo");
const profilebtn = document.getElementById("profile-square"); 
const findalert = document.getElementById("find");
const questModal = document.getElementById("pack");
const findModal= document.getElementById('findpage');
const exitbtn = document.querySelector(".exitbtn");
const findexit = document.querySelector(".findexit");
// const fileupload = document.getElementById('fileupload');
const uploadbtn = document.getElementById('addImg');
const findbtn = document.getElementById('findbtn');
const profile = document.getElementById('profile');
const profileExit = document.querySelector(".profile-exit");

function gomain(){
    location.href="main.html";
}

function showfind(){
    findModal.classList.remove('hidden');
}

function hidefind(){
    findModal.classList.add('hidden');
}

function showmodal(){
    questModal.classList.remove('hidden');
}

function hidemodal(){
    questModal.classList.add('hidden');
}

function showprofile(){
    profile.classList.remove('hidden');
}

function hideprofile(){
    profile.classList.add('hidden');
}

// function getImages() {
//     axios.get(url).then(
//       (res) => {
//         const imgURL = res.data.message;
//         const dogImage = document.createElement("img");
//         dogImage.src = imgURL;
//         dogImage.style.height ="240px";
//         document.querySelector(".quest-body").appendChild(dogImage);
//     })
//   }

function postImages(){
    fileupload.click();
}

// function setThumbnail(event) {
//     var reader = new FileReader();

//     reader.onload = function(e) {
//       var img = document.createElement("img");
//       img.setAttribute("src", e.target.result);
//       img.setAttribute("id", thumbnail);
//       document.querySelector("div.thumnail").appendChild(img);
//     };

//     reader.readAsDataURL(event.target.files[0]);
//   }

homebtn.addEventListener("click",gomain);
findalert.addEventListener("click",showmodal);
findexit.addEventListener("click",hidefind);
findbtn.addEventListener("click",showfind);
exitbtn.addEventListener("click",hidemodal);
profilebtn.addEventListener("click",showprofile);
profileExit.addEventListener('click',hideprofile);
// fileupload.addEventListener("click",getImages);
// fileupload.addEventListener("change",setThumbnail);
uploadbtn.onclick=postImages;
});