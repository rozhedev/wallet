document.addEventListener("click", e => {
    let isDropdownButton = e.target.parentElement.matches("[data-dropdown-button]");
    // let isDropdownClosest = isDropdownButton && e.target.closest("[data-dropdown]");

    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown;
    if (isDropdownButton && e.target.closest("[data-dropdown]")) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active");
    })
})
