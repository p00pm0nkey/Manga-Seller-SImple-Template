console.log(localStorage.getItem("currentUsername"))
let login_local = document.getElementById("login_local");

function revealPassword() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

let warning = document.querySelector("h4");

login_local.addEventListener("click", function () {
    event.preventDefault();

    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    if (!username) {
        warning.innerText = "Username is required";
    } else if (!password) {
        warning.innerText = "Password is required";
    } else if (password !== localStorage.getItem(username)) {
        warning.innerText = "Incorrect username or password";
    } else {
        warning.innerText = "Login successfully";
        localStorage.setItem("currentUsername", username);
        setTimeout(function () {window.location.href = "main.html"}, 3000);
        let cart = [];
        localStorage.setItem("cart", cart);
    }
});

let fa_bars = document.querySelector(".fa-bars");
let menu = document.querySelector(".menu");
let fa_user = document.querySelector(".fa-user");
let login = document.querySelector(".login");

fa_bars.addEventListener("click", function () {
    menu.style.top = menu.style.top === "72px" ? "-100px" : "72px";
    menu.style.left = "0.8%";
});

fa_user.addEventListener("click", function () {
    login.style.top = login.style.top === "72px" ? "-100px" : "72px";
    login.style.right = "1%";
});

let name1 = document.querySelector(".name");
name1.addEventListener("click", function () {
    window.location.href = "main.html";
});

let profile = document.querySelector(".fa-user");
profile.addEventListener("click", function () {
    window.location.href = "profile.html";
});