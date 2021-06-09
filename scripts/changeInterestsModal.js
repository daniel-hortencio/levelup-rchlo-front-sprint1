var interestsContainer = document.getElementById("interests-container")
var interestsToggle = document.getElementById("interests-container-toggle")
var interestsModal = document.getElementById("interests-modal")
var interestsModalBackground = document.getElementById("interests-modal-background")

var modalIsOpen = false;

function changeModal() {
    if (modalIsOpen) {
        modalIsOpen = false
    } else {
        modalIsOpen = true
    }
    interestsContainer.setAttribute("aria-expanded", modalIsOpen)
}

function closeInterestsModal() {
    modalIsOpen = false;
    interestsContainer.setAttribute("aria-expanded", modalIsOpen)
}

interestsToggle.onclick = () => changeModal();
interestsModalBackground.onclick = () => closeInterestsModal();