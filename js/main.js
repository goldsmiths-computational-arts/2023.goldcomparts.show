const i_menu = document.getElementById("menu");
const i_close = document.getElementById("close");
const nav_bar = document.getElementById("nav");

i_menu.addEventListener("click", () => {
    // i_menu.classList.replace("show", "hide");
    // nav_bar.classList.replace("hide", "show");
    // i_close.classList.replace("hide", "show");

    i_menu.classList.toggle("show");
    nav_bar.classList.toggle("show");
    i_close.classList.toggle("show");
});

i_close.addEventListener("click", () => {
    // i_menu.classList.replace("show", "hide");
    // nav_bar.classList.replace("hide", "show");
    // i_close.classList.replace("hide", "show");

    i_menu.classList.toggle("show");
    nav_bar.classList.toggle("show");
    i_close.classList.toggle("show");
});