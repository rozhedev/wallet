const submenuItems = document.querySelectorAll(".aside-nav-item__link");

if (submenuItems) {
    submenuItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            // * selecting main parent of submenuItems
            let submenuItemsParent = e.target.parentElement.parentElement;
            submenuItemsParent.classList.toggle("_show-submenu");
        });
    })

}

const sidebar = document.querySelector(".aside-cab");
const sidebarBtn = document.querySelector(".header-cab__trigger");
const sidebarLabel = document.querySelector(".header-cab__trigger span");

if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("_close");
        sidebar.classList.contains("_close") ? sidebarLabel.textContent = "menu" : sidebarLabel.textContent = "close";
    });
}