import { STATE_LIST } from '../data/values';

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progressSteps = document.querySelectorAll(".progress-step");
const progressLineActive = document.getElementById("progress-line-active");
let progressCount = 0;

const FORM_STEPS_ATTR = {
    survey: "[data-step='form-survey']",
    connect: "[data-step='form-connect']",
    register: "[data-step='form-register']",
}

const FORM_STEPS = {
    survey: document.querySelectorAll(FORM_STEPS_ATTR.survey),
    connect: document.querySelectorAll(FORM_STEPS_ATTR.connect),
    register: document.querySelectorAll(FORM_STEPS_ATTR.register),
}

// * FUNCTION
function listItemClassRemover(nodeList, { active }) {
    nodeList.forEach((item) => {
        if (item.classList.contains(active)) item.classList.remove(active)
    })
}

function slideNextForm(target, formAttr, { active }) {
    let form = target.closest(formAttr);
    let nextForm = form.nextSibling.nextElementSibling;
    nextForm.classList.add(active);
}

function slidePrevForm(target, formAttr, { active }) {
    let form = target.closest(formAttr);
    let nextForm = form.previousSibling.previousElementSibling;
    nextForm.classList.add(active);
}

function updateProgressbar(steps, counter, { active }) {
    steps.forEach((item, order) => {
        if (order < counter + 1) item.classList.add(active);
        else item.classList.remove(active);
    })
    const progressStepsActive = document.querySelectorAll(".progress-step._active");
    progressLineActive.style.width = (progressStepsActive.length - 1) / (progressSteps.length - 1) * 100 + "%";
}


// * CALL FUNC
if (nextBtns && prevBtns) {
    nextBtns.forEach((btn) => {
        if (btn.getAttribute("type") == "submit") return

        btn.addEventListener("click", (e) => {
            let target = e.target;
            if (target.closest(FORM_STEPS_ATTR.connect)) {
                listItemClassRemover(FORM_STEPS.connect, STATE_LIST);
                slideNextForm(target, FORM_STEPS_ATTR.connect, STATE_LIST);

            } else if (target.closest(FORM_STEPS_ATTR.survey)) {
                listItemClassRemover(FORM_STEPS.survey, STATE_LIST);
                slideNextForm(target, FORM_STEPS_ATTR.survey, STATE_LIST);

            } else if (target.closest(FORM_STEPS_ATTR.register)) {
                listItemClassRemover(FORM_STEPS.register, STATE_LIST);
                slideNextForm(target, FORM_STEPS_ATTR.register, STATE_LIST);
            }
            if (progressLineActive) {
                progressCount++;
                updateProgressbar(progressSteps, progressCount, STATE_LIST);
            }
        })
    })

    prevBtns.forEach((btn) => {
        if (btn.getAttribute("type") == "submit") return

        btn.addEventListener("click", (e) => {
            let target = e.target;
            if (target.closest(FORM_STEPS_ATTR.connect)) {
                listItemClassRemover(FORM_STEPS.connect, STATE_LIST);
                slidePrevForm(target, FORM_STEPS_ATTR.connect, STATE_LIST);

            } else if (target.closest(FORM_STEPS_ATTR.survey)) {
                listItemClassRemover(FORM_STEPS.survey, STATE_LIST);
                slidePrevForm(target, FORM_STEPS_ATTR.survey, STATE_LIST);

            } else if (target.closest(FORM_STEPS_ATTR.register)) {
                listItemClassRemover(FORM_STEPS.register, STATE_LIST);
                slidePrevForm(target, FORM_STEPS_ATTR.register, STATE_LIST);
            }
            if (progressLineActive) {
                progressCount--;
                updateProgressbar(progressSteps, progressCount, STATE_LIST);
            }
        })
    })
}
