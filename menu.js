var menuIsOpen = false;

function openMenu() {
    var menu = document.getElementById("menu");
    if(menuIsOpen === false) {
        menuIsOpen = true;
        menu.classList.add("open-menu");
    } else {
        menuIsOpen = false;
        menu.classList.remove("open-menu")
    }
}