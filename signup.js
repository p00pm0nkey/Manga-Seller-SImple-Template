let register_local = document.getElementById("register_local");

function revealPassword() {
    let x = document.getElementById("passwordInput");
    x.type = x.type === "password" ? "text" : "password";
}

let warning = document.getElementById("warning");

register_local.addEventListener("click", function () {
    event.preventDefault()

    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
    let repassword = document.getElementById("repasswordInput").value;

    if (!username) {
        warning.innerText = "Username is required";
    } else if (!password) {
        warning.innerText = "Password is required";
    } else if (!repassword) {
        warning.innerText = "Re-entering password is required";
    } else if (password.length < 8) {
        warning.innerText = "Password must be at least 8 characters";
    } else if (password !== repassword) {
        warning.innerText = "Passwords do not match";
    } else if (localStorage.getItem(username)) {
        warning.innerText = "Username taken";
    } else {
        warning.innerText = "Registration successful. Redirecting you in a few seconds...";
        localStorage.setItem(username, password);
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