var header = document.getElementById("header")

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.setAttribute("aria-scroll-page", true)
        if (window.innerWidth > 1280) {
            document.getElementById("main").style = "padding-top: 9rem"
        }
    } else {
        header.setAttribute("aria-scroll-page", false)
        document.getElementById("main").style = "padding-top: initial"
    }
}

window.onscroll = function () { myFunction() };