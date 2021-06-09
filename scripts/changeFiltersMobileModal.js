var filterOptionsContainer = document.getElementById("filters-options-container")
var filterToggle = document.getElementById("filters-toggle")
var filtersModalBackground = document.getElementById("filters-modal-background")
var filtersClose = document.getElementById("filters-close")
var filterIsOpen = false;

function changeFilterContainerModal() {
    if (filterIsOpen) {
        filterIsOpen = false
    } else {
        filterIsOpen = true
    }
    filterOptionsContainer.setAttribute("aria-expanded", filterIsOpen)
}

function closeModal() {
    filterIsOpen = false;
    filterOptionsContainer.setAttribute("aria-expanded", filterIsOpen)
}

filterToggle.onclick = () => changeFilterContainerModal();
filtersModalBackground.onclick = () => closeModal();
filtersClose.onclick = () => closeModal();