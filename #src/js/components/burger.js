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
