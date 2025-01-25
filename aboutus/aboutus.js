const menuButton = document.getElementById("menu-button");
const menuPic = document.getElementById("menu-pic");
const menuPicLight = document.getElementById("menu-pic2");
const backgroundPic = document.getElementById("background-pic");

const homeTxt = document.getElementById("home-txt");
const aboutusTxt = document.getElementById("aboutus-txt");
const productsTxt = document.getElementById("products-txt");

const homeDark = document.getElementById("home-dark");
const aboutusDark = document.getElementById("aboutus-dark");
const productsDark = document.getElementById("products-dark");

const homeButton = document.getElementById("home-button");
const aboutusButton = document.getElementById("aboutus-button");
const productsButton = document.getElementById("products-button");

homeButton.addEventListener("mouseover", () => {
    homeTxt.style.display = "none";
    homeDark.style.display = "block";
});

homeButton.addEventListener("mouseout", () => {
    homeTxt.style.display = "block";
    homeDark.style.display = "none";
});

aboutusButton.addEventListener("mouseover", () => {
    aboutusTxt.style.display = "none";
    aboutusDark.style.display = "block";
});

aboutusButton.addEventListener("mouseout", () => {
    aboutusTxt.style.display = "block";
    aboutusDark.style.display = "none";
});

productsButton.addEventListener("mouseover", () => {
    productsTxt.style.display = "none";
    productsDark.style.display = "block";
});

productsButton.addEventListener("mouseout", () => {
    productsTxt.style.display = "block";
    productsDark.style.display = "none";
});




let isMenuClicked = false;

menuButton.addEventListener("mouseover", () => {    
    if (!isMenuClicked) {
        menuPic.style.display = "none";
    } else {
        menuPic.style.display = "block";
    }
});

menuButton.addEventListener("mouseout", () => {  
    if (!isMenuClicked) {
        menuPic.style.display = "block";      
    } else {
        menuPic.style.display = "none";
    }
});

menuButton.addEventListener("click", () => {
    isMenuClicked = !isMenuClicked;
    if (getComputedStyle(backgroundPic).display == "none") {
        backgroundPic.style.display = "block";
        menuPic.style.display = "none";
        menuPicLight.style.display = "block";

        homeTxt.style.display = "block";
        aboutusTxt.style.display = "block";
        productsTxt.style.display = "block";

        homeDark.style.display = "none";
        aboutusDark.style.display = "none";
        productsDark.style.display = "none";


        homeButton.style.display = "block";
        aboutusButton.style.display = "block";
        productsButton.style.display = "block";
        
    } else {
        backgroundPic.style.display = "none";

        homeTxt.style.display = "none";
        aboutusTxt.style.display = "none";
        productsTxt.style.display = "none";

        homeDark.style.display = "block";
        aboutusDark.style.display = "block";
        productsDark.style.display = "block";

        homeButton.style.display = "none";
        aboutusButton.style.display = "none";
        productsButton.style.display = "none";
    }
});



