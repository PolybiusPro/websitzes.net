const navbar = document.getElementById("navbar");
const scrollNotify = document.getElementById("scroll-notify");

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if(window.scrollY <= 200){
        navbar.style = `background-color: rgba(34, 34, 34, ${scrollPos / 200})`;
        scrollNotify.style = `opacity: ${1 - (scrollPos / 200)}`;
    } else {
        navbar.style = "background-color: rgb(34,34,34)";
    }
})