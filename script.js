
let loginBtn = document.querySelector(".login-btn");  // Select login button

function welcomeMessage() {
    alert("Welcome to ValorX Soldier!");
}

loginBtn.addEventListener("click", welcomeMessage);


// Name display section
let startBtn = document.getElementById("startBtn");
let displayName = document.getElementById("displayName");
let playerNameInput = document.getElementById("playerName");

function showName() {
    let name = playerNameInput.value.trim(); // remove extra spaces

    if (name === "") {
        displayName.innerText = "Please enter your name";
    } else {
        displayName.innerText = "Welcome, " + name;
    }
}

startBtn.addEventListener("click", showName);

