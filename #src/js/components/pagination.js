// TODO Add three dots between numbers in React version
import { STATE_LIST } from "../data/values";

const PAGIN_NODES = {   
    numWrapper: "pagination-numbers",
    nextBtn: "next-button",
    prevButton: "prev-button",
}

const paginationNumbers = document.getElementById(PAGIN_NODES.numWrapper);
const nextButton = document.getElementById(PAGIN_NODES.nextBtn);
const prevButton = document.getElementById(PAGIN_NODES.prevButton);
const paginNumbersClass = "pagination-number";
let listItems = 50;

const paginationLimit = 10;  // * items per page
const pageCount = Math.ceil(listItems / paginationLimit);
let currentPage = 1;

if (paginationNumbers) {
    const disableButton = (button) => {
        button.classList.add("disabled");
        button.setAttribute("disabled", true);
    };

    const enableButton = (button) => {
        button.classList.remove("disabled");
        button.removeAttribute("disabled");
    };

    const handlePageButtonsStatus = () => {
        if (currentPage === 1) {
            disableButton(prevButton);
        } else {
            enableButton(prevButton);
        }
        if (pageCount === currentPage) {
            disableButton(nextButton);
        } else {
            enableButton(nextButton);
        }
    };

    const handleActivePageNumber = () => {
        document.querySelectorAll(`.${paginNumbersClass}`).forEach((button) => {
            button.classList.remove(STATE_LIST.active);
            const pageIndex = Number(button.getAttribute("page-index"));
            if (pageIndex == currentPage) {
                button.classList.add(STATE_LIST.active);
            }
        });
    };

    const appendPageNumber = (index) => {
        const pageNumber = document.createElement("button");
        pageNumber.className = paginNumbersClass;
        pageNumber.innerHTML = index;
        pageNumber.setAttribute("page-index", index);
        pageNumber.setAttribute("aria-label", "Page " + index);

        paginationNumbers.appendChild(pageNumber);
    };

    const getPaginationNumbers = () => {
        for (let i = 1; i <= pageCount; i++) {
            appendPageNumber(i);
        }
    };

    const setCurrentPage = (pageNum) => {
        currentPage = pageNum;
        handleActivePageNumber();
        handlePageButtonsStatus();
    };

    window.addEventListener("load", () => {
        getPaginationNumbers();
        setCurrentPage(1);

        prevButton.addEventListener("click", () => {
            setCurrentPage(currentPage - 1);
        });
        nextButton.addEventListener("click", () => {
            setCurrentPage(currentPage + 1);
        });

        document.querySelectorAll(`.${paginNumbersClass}`).forEach((button) => {
            const pageIndex = Number(button.getAttribute("page-index"));
            if (pageIndex) {
                button.addEventListener("click", () => {
                    setCurrentPage(pageIndex);
                });
            }
        });
    });
}