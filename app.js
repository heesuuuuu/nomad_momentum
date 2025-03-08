const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a")

function onLoginSubmit(event){
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("clicked!");
}

loginForm.addEventListener("submit",onLoginSubmit); // 주의 : onLoginSubmit() 이렇게 쓰면 안됨 
link.addEventListener("click",handleLinkClick);
