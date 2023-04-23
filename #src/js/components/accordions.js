const SELECTOR_LIST = {
    advantDetails: ".advant .inner .advant-details",
    advantDetailsOpen: ".advant .inner .advant-details[open]",
}   

const advantAccordions = document.querySelectorAll(`${SELECTOR_LIST.advantDetails}`);

function toggleAccordion(e) {
    if (e.target.open) {
        document
            .querySelectorAll(`${SELECTOR_LIST.advantDetails}`)
            .forEach((item) => {
                if (item === e.target) {
                    return;
                }
                item.open = false;
            });
    }
}

advantAccordions.forEach((item) => item.addEventListener("toggle", toggleAccordion));