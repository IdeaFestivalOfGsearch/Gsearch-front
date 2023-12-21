document.addEventListener('DOMContentLoaded', function() {
const homebtn = document.getElementById("home-logo");
const profilebtn = document.getElementById("profile-square"); 
const findalert = document.getElementById("find");
const questModal = document.getElementById("pack");
const findModal= document.getElementById('findpage');
const exitbtn = document.querySelector(".exitbtn");
const findexit = document.querySelector(".findexit");
const uploadbtn = document.getElementById('addImg');
const findbtn = document.getElementById('findbtn');
const profile = document.getElementById('profile');
const profileExit = document.querySelector(".profile-exit");
const fileupload = document.getElementById("fileupload");
const market = document.querySelector(".market");
const marketpage = document.querySelector("#marketpage");
const marketexit = document.querySelector(".marketexit");
const nicknametop = document.querySelector(".nickname-top");
const thumnail = document.getElementById('thumnail');
const map = document.getElementById('map');

function gomap(){
    location.href="school_map1,2.html";
}

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

function clickImages(){
    fileupload.click();
}

function showmarket(){
    marketpage.classList.remove('hidden');
    profile.classList.add('hidden');
}

function hidemarket(){
    marketpage.classList.add('hidden');
    profile.classList.remove('hidden');
}

function showThumnail(input){
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        addImg.classList.add('hidden');
        thumnail.classList.remove('hidden');
        thumnail.src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    } else {
        addImg.classList.remove('hidden');
        thumnail.classList.add('hidden');
        thumnail.src = "";
    }
}

async function insertprofile(){
    await axios.get(`http://localhost:3002/login`)
    .then((res)=>{
        const responsData = res.data;
        const email = responsData.email;
        const point = responsData.point;
        const title = responsData.title;

        const nickname = document.querySelector('.nickname');
        const pointer = document.querySelector('.point');
        const nowtitle = document.querySelector('.title');

        nicknametop.innerText = `${email}`;
        nickname.innerText = `${email}`;
        pointer.innerText = `포인트 ${point}P`;
        nowtitle.innerHTML = `칭호 ${title}`;
    }
    ).catch((err)=>{
        console.log(err);
    })
}

async function insertwanted(){
    await axios.get(`http://localhost:3002/wanted`)
    .then((res)=>{
        const responsData = res.data;
        const src = responsData.src;
        const title = responsData.title;

        const wantedBody = document.querySelector('.wanted-body');

        wantedBody.innerHTML = `<div class="container">
        <img src="${src}" class="wanted-img"/>
        <div class="wanted-img-title">${title}
        </div>
        </div>`;
    }
    ).catch((err)=>{
        console.log(err);
    })
}

async function insertfind(){
    await axios.get(`http://localhost:3002/find`)
    .then((res)=>{
        const responsData = res.data;
        const content = responsData.content;
        const title = responsData.title;

        const questBody = document.querySelector('.quest-body');

        questBody.innerHTML=`<div class="sentence">
        <div class="sentence-title">${title}</div>
        <div class="sentence-detail">${content}
        </div>
        </div>`;
    }
    ).catch((err)=>{
        console.log(err);
    })
}

window.addEventListener("load",insertprofile);
window.addEventListener("load",insertwanted);
window.addEventListener("load",insertfind);
map.addEventListener("click",gomap);
homebtn.addEventListener("click",gomain);
findalert.addEventListener("click",showmodal);
findexit.addEventListener("click",hidefind);
findbtn.addEventListener("click",showfind);
exitbtn.addEventListener("click",hidemodal);
profilebtn.addEventListener("click",showprofile);
profileExit.addEventListener('click',hideprofile);
market.addEventListener('click',showmarket);
marketexit.addEventListener('click',hidemarket);
uploadbtn.onclick= clickImages;
fileupload.onchange=showThumnail(this);
});