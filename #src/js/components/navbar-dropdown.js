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
const sidebarBtn = document.querySelector(".dashboard__content-title");

if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("_close");
    });
}