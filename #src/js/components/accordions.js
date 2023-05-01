const SELECTOR_LIST = {
    advantAccordion: ".advant .inner .advant-accordion",
    advantAccordionOpen: ".advant .inner .advant-accordion[open]",
    faqAccordion: ".faq-accordion",
    faqAccordionOpen: ".faq-accordion[open]",
}

const advantAccordionsList = document.querySelectorAll(`${SELECTOR_LIST.advantAccordion}`);
const faqAccordionsList = document.querySelectorAll(`${SELECTOR_LIST.faqAccordion}`);

function toggleAccordion(e) {
    if (e.target.open) {
        document
            .querySelectorAll(`details`)
            .forEach((item) => {
                if (item === e.target) {
                    return;
                }
                item.open = false;
            });
    }
}

if (advantAccordionsList.length > 0) {
    advantAccordionsList.forEach((item) => item.addEventListener("toggle", toggleAccordion));
}

if (faqAccordionsList.length > 0) {
    faqAccordionsList.forEach((item) => {
        item.addEventListener("toggle", toggleAccordion);
    });
}