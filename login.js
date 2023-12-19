const email = document.getElementById('email');
const emailInput = document.getElementById('emailbtn');
const password = document.getElementById('password');
const passwordInput = document.getElementById('passwordbtn');
const loginbtn = document.getElementById('loginbtn');

function submitLogin(event){
    event.preventDefault();
    if(emailInput.value==="test@test.com"&&passwordInput.value==="test1234"){
        location.href="index.html";
    }else if(emailInput.value===""||emailInput.value===""){
        alert("아이디와 비번을 입력해주세요.");
        location.href = "login.html";
    }else{
        alert("이메일 또는 비밀번호가 틀렸습니다.");
        location.href = "login.html";
    }
}

loginbtn.addEventListener("click",submitLogin);