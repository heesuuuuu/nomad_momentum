const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit",onLoginSubmit); // 주의 : onLoginSubmit() 이렇게 쓰면 안됨 

