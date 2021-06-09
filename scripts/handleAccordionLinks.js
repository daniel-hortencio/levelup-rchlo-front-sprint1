var accordions = []

for (var i = 0; i < 4; i++) {
    accordions.push({
        id_button: `accordion-btn-${i + 1}`,
        id_list: `accordion-list-${i + 1}`,
        icon_content: "+",
        expanded: false
    })
}

function handleClick(id) {
    let index = accordions.findIndex(accordion => accordion.id_button === id)
    let accordion = accordions[index]
    let list = document.getElementById(accordions[index].id_list)

    let icon = document.getElementById(`accordion-icon-${index + 1}`)

    if (accordion.expanded) {
        accordion.expanded = false;
        accordion.icon_content = "+"
    } else {
        accordion.expanded = true;
        accordion.icon_content = "-"
    }

    list.setAttribute("aria-expanded", accordion.expanded)
    icon.innerText = accordion.icon_content;
}

accordions.forEach(accordion => {
    var id = accordion.id_button
    var btn = document.getElementById(id)
    btn.onclick = () => handleClick(id)
})