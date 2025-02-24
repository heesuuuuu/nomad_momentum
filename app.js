const loginForm = document.getElementById ('login-form');
const loginInput = loginForm.querySelector("input");
// const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

function handleLoginBtnClick(){
    console.log("hello~", loginInput.value)
}


loginButton.addEventListener("click", handleLoginBtnClick);