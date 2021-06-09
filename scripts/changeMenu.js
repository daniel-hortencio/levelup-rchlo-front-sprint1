var toggleMenu = document.getElementById("toggle-menu")
var navbar = document.getElementById("navbar")
var searchbar = document.getElementById("search-bar")

var isOpen = false;

function changeMenu() {
    if (isOpen) {
        isOpen = false
    } else {
        isOpen = true
    }

    toggleMenu.setAttribute("aria-expanded", isOpen)
    navbar.setAttribute("aria-expanded", isOpen)
    searchbar.setAttribute("aria-hidden", isOpen)
}

toggleMenu.onclick = () => changeMenu();