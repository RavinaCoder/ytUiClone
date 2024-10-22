let menu = document.getElementById("menu-btn");
let sideMenu = document.querySelector(".side-menu");
let heroMain = document.querySelector(".hero-main");
let cards = document.querySelectorAll(".card");
menu.addEventListener("click",()=>{
    sideMenu.classList.toggle("small-side-menu");
    cards.forEach(function(card){
    card.classList.toggle("small-card");
   })
})

let heroTop = document.querySelector(".hero-a-section");
let heroTopLinks = heroTop.querySelectorAll('a');

let defultDp = document.getElementById("defult-dp");
let inputFile = document.getElementById("main-dp");
inputFile.addEventListener("change",()=>{
defultDp.src = URL.createObjectURL(inputFile.files[0]);
});




