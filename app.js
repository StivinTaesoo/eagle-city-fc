// ============= MOBILE MENU ===========================
let menuBtn = document.getElementById("menuBtn");
let mobileMenu = document.getElementById("mobileMenu");
let closeMenu = document.getElementById("closeMenu");

// Show Menu
menuBtn.addEventListener("click", () => {
    mobileMenu.style.top = "0";
});

// Close Menu
closeMenu.onclick = function () {
    mobileMenu.style.top = "-1000px";
};

// ============= SEARCH BAR ============================
let searchBar = document.querySelector(".search-bar");
let showSearchBar = document.querySelectorAll(".show-search-bar");
let hideNav = document.getElementById("hideNav");

showSearchBar.forEach(function (search) {
    search.addEventListener("click", () => {
        hideNav.style.display = "none";
        mobileMenu.style.display = "none";
        searchBar.style.display = "flex";
    });
});

// ============= SCROLLS ===============================
let scrollContainer = document.querySelector(".scrollContainer");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let scrollContainer2 = document.querySelector(".scrollContainer2");
let prev2 = document.querySelector(".prev2");
let next2 = document.querySelector(".next2");

let scrollContainer3 = document.querySelector(".scrollContainer3");
let prev3 = document.querySelector(".prev3");
let next3 = document.querySelector(".next3");

let scrollContainer4 = document.querySelector(".scrollContainer4");
let prev4 = document.querySelector(".prev4");
let next4 = document.querySelector(".next4");

prev.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 400;
});

next.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 400;
});

prev2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft += 400;
});

next2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft -= 400;
});

prev3.addEventListener("click", () => {
    scrollContainer3.style.scrollBehavior = "smooth";
    scrollContainer3.scrollLeft += 400;
});

next3.addEventListener("click", () => {
    scrollContainer3.style.scrollBehavior = "smooth";
    scrollContainer3.scrollLeft -= 400;
});

prev4.addEventListener("click", () => {
    scrollContainer4.style.scrollBehavior = "smooth";
    scrollContainer4.scrollLeft += 400;
});

next4.addEventListener("click", () => {
    scrollContainer4.style.scrollBehavior = "smooth";
    scrollContainer4.scrollLeft -= 400;
});
