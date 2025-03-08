const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; //위와 같은 의미 
    greeting.classList.remove(HIDDEN_CLASSNAME); //정보를 담은거라서 대문자로 관습처럼 사용
}


loginForm.addEventListener("submit",onLoginSubmit); // 주의 : onLoginSubmit() 이렇게 쓰면 안됨 
 