window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 5);
})

var hamburger = document.getElementById("menu-icon");
hamburger.addEventListener("click", function(){
    var nav_link = document.querySelector(".nav_links");
    nav_link.classList.toggle("open");
})