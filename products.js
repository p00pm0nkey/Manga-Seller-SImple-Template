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

let currentIndexes = [0, 0, 0]; // Track the current index for each carousel

function showSection(carouselIndex, sectionIndex) {
    const carousel = document.getElementById(`carousel-${carouselIndex}`);
    const totalSections = carousel.querySelectorAll('.carousel-item').length;

    if (sectionIndex >= totalSections) {
        currentIndexes[carouselIndex] = 0;
    } else if (sectionIndex < 0) {
        currentIndexes[carouselIndex] = totalSections - 1;
    } else {
        currentIndexes[carouselIndex] = sectionIndex;
    }

    const offset = -currentIndexes[carouselIndex] * 100; // Assuming each section is 100% width
    carousel.style.transform = `translateX(${offset}%)`;
    updateDots(carouselIndex);
}

function nextSection(carouselIndex) {
    showSection(carouselIndex, currentIndexes[carouselIndex] + 1);
}

function createDots(carouselIndex) {
    const dotsContainer = document.getElementById(`dots-container-${carouselIndex}`);
    const totalSections = document.getElementById(`carousel-${carouselIndex}`).querySelectorAll('.carousel-item').length;

    for (let i = 0; i < totalSections; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showSection(carouselIndex, i));
        dotsContainer.appendChild(dot);
    }
    updateDots(carouselIndex);
}

function updateDots(carouselIndex) {
    const dots = document.getElementById(`dots-container-${carouselIndex}`).querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndexes[carouselIndex]);
    });
}

// Initialize the sections and dots for each carousel
document.addEventListener("DOMContentLoaded", () => {
    const totalCarousels = 3; // Number of carousels
    for (let i = 0; i < totalCarousels; i++) {
        showSection(i, currentIndexes[i]);
        createDots(i);
    }
});

let profile = document.querySelector(".fa-user");
profile.addEventListener("click", function () {
    window.location.href = "profile.html";
});

if (username === null) {
    window.location.href = "login.html";
}

let csm1 = document.querySelector(".csm1");
csm1.addEventListener("click", function () {
    window.location.href = "csm1.html";
});

document.getElementById("searchButton").addEventListener("click", function () {
    let searchTerm = document.getElementById("searchBox").value.toLowerCase();
    let products = document.querySelectorAll(".thing");

    products.forEach(product => {
        let title = product.querySelector("h3").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

document.getElementById("searchBox").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        document.getElementById("searchButton").click();
    }
});
