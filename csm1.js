let username = localStorage.getItem("currentUsername");
let password = localStorage.getItem(username);
console.log(username);

let fa_bars = document.querySelector(".fa-bars");
let menu = document.querySelector(".menu");

fa_bars.addEventListener("click", function () {
    menu.style.top = menu.style.top === "72px" ? "-100px" : "72px";
    menu.style.left = "0.8%";
});

let name1 = document.querySelector(".name");
name1.addEventListener("click", function () {
    window.location.href = "main.html";
});

let profile = document.querySelector(".fa-user");
profile.addEventListener("click", function () {
    window.location.href = "profile.html";
});

if (username === null) {
    window.location.href = "login.html";
}

let cart = [];

const savedCart = localStorage.getItem('cart');
if (savedCart) {
    cart = JSON.parse(savedCart);
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addtoCart(item) {
    cart.push(item);
    saveCartToLocalStorage();
}

function removefromCart(item) {
    const index = cart.indexOf(item);
    console.log(index);
    console.log(item);
    if (index > -1) {
        cart.slice(index, 1);
    }
    saveCartToLocalStorage();
}

let addCart = document.querySelector(".addCart");
addCart.addEventListener("click", function () {
    let newItem = {
        name: "Chainsaw Man, Vol. 1",
        price: 170000,
        quantity: 1
    };
    addtoCart(newItem);
    console.log(JSON.parse(localStorage.getItem("cart")));
});

let removeCart = document.querySelector(".removeCart");
removeCart.addEventListener("click", function () {
    let newItem = {
        name: "Chainsaw Man, Vol. 1",
        price: 170000,
        quantity: 1
    };
    removefromCart(newItem);
    console.log(JSON.parse(localStorage.getItem("cart")));
});