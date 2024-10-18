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



