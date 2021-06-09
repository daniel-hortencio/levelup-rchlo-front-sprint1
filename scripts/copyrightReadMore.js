var readMoreParagraph = document.getElementById("copyright-more-informations")
var buttonToggle = document.getElementById("copyright-more-informations-toggle")

var isOpen = false;

function changeReadMoreParagraph() {
    if (isOpen) {
        isOpen = false;
    } else {
        isOpen = true;
    }

    readMoreParagraph.setAttribute("aria-expanded", isOpen)
}

buttonToggle.onclick = () => changeReadMoreParagraph()