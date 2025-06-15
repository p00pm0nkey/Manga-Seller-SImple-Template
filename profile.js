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

let username_displayed = document.querySelector(".username");
username_displayed.innerText = username;

document.getElementById('logoutBtn').addEventListener('click', logout);

function logout() {
    localStorage.removeItem('currentUsername');
    window.location.href = 'login.html';
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function displayCartOnProfilePage() {
    let cartDetails = document.getElementById('cartDetails');
    
    let cartDetailsHTML = '<h2>Your Cart</h2>';
    if (cart.length === 0) {
        cartDetailsHTML += '<p>Your cart is empty.</p>';
    } else {
        cartDetailsHTML += '<ul>';
        cart.forEach(item => {
            cartDetailsHTML += `<li>${item.name} - Quantity: ${item.quantity}</li>`;
        });
        cartDetailsHTML += '</ul>';
    }

    cartDetails.innerHTML = cartDetailsHTML;
}

loadCartFromLocalStorage();
displayCartOnProfilePage();