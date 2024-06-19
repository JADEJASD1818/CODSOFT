var typed = new Typed(".text", {
    strings: ["Web Developer", "Frontend Developer", "Coder"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 100,
    loop: true
})

var navList = document.querySelector(".ul-list");
function showList(){
    if(navList.style.visibility == "hidden"){
        navList.style.visibility = "visible";
    }else{
        navList.style.visibility = "hidden"
    }
}