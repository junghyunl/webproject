/*const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input"); //loginForm에서 element검색
const loginButton = loginForm.querySelector("button");
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
/*
const loginButton = document.querySelector("#login-form button");
 */

function onLoginSubmit(event) {
    event.preventDefault();
    //const username = loginInput.value;
    console.log(loginInput.value);
    /*if (username === "") {
        alert("Please write your name");
    } else if (username.length > 15) {
        alert("Your name is too long.");
    }*/
}

//loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListner("submit", onLoginSubmit);