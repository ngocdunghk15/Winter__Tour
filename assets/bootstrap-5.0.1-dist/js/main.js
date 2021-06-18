const toTop = document.querySelector(".to-top-button");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 200){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})
