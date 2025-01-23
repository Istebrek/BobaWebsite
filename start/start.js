const menuButton = document.getElementById("menu-button");
const menuPic = document.getElementById("menu-pic");

menuButton.addEventListener("mouseover", () => {    
    menuPic.style.display = "none";        
});

menuButton.addEventListener("mouseout", () => {    
    menuPic.style.display = "block";        
});

