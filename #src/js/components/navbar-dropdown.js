const arrow = document.querySelectorAll(".menu-arrow");

if (arrow) {
    for (let i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e) => {
            // * selecting main parent of arrow
            let arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle("_show-submenu");
        });
    }
}

const sidebar = document.querySelector(".aside-cab");
const sidebarBtn = document.querySelector(".header-cab__trigger");
const sidemarLabel = document.querySelector(".header-cab__trigger span");

if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("_close");
        sidebar.classList.contains("_close") ? sidemarLabel.textContent = "menu" : sidemarLabel.textContent = "close";
    });
}