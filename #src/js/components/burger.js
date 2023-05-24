"use strict";

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.iOS() ||
            isMobile.Opera()
        );
    }
};

// * SUBMENU

if (isMobile.any()) {
    document.body.classList.add("_touch");

    let dropdownList = document.querySelectorAll(".dropdown");
    if (dropdownList.length > 0) {
        for (let i = 0; i < dropdownList.length; i++) {
            const dropdownItem = dropdownList[i];
            dropdownItem.addEventListener("click", function (e) {
                dropdownItem.classList.toggle("_active");
            });
        }
    }
} else {
    document.body.classList.add("_pc");
}

// * BURGER

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}

// * SCROLL WHEN CLICK

const menuLinks = document.querySelectorAll(".scroll-btn__toggle[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        let menuLink = e.target;
        if (!menuLink.dataset.goto) menuLink = e.target.parentElement;
        if (
            menuLink.dataset.goto &&
            document.querySelector(menuLink.dataset.goto)
        ) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue =
                gotoBlock.getBoundingClientRect().top +
                scrollY -
                document.querySelector("header").offsetHeight;

            if (iconMenu.classList.contains("_active")) {
                document.body.classList.remove("_lock");
                iconMenu.classList.remove("_active");
                menuBody.classList.remove("_active");
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}