const loginForm = document.getElementById ('login-form');
const loginInput = loginForm.querySelector("input");
// const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

function handleLoginBtnClick(){
    const username = loginInput.value;
    if (username === ""){
        alert("Please write your name");
    }
    else if(username.length>15){
        alert("your name is too long");
    }
}

loginButton.addEventListener("click", handleLoginBtnClick);