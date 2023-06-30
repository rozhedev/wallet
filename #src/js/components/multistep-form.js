import { STATE_LIST } from '../data/values';

const formBtnGroups = document.querySelectorAll(".btn-group");
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

function slideNextForm(target, formAttr, removerFunc, { active }) {
    removerFunc;
    let form = target.closest(formAttr);
    let nextForm = form.nextSibling.nextElementSibling;
    nextForm.classList.add(active);
}

function slidePrevForm(target, formAttr, removerFunc, { active }) {
    removerFunc;
    let form = target.closest(formAttr);
    let prevForm = form.previousSibling.previousElementSibling;
    prevForm.classList.add(active);
}

function updateProgressbar(steps, counter, { active }) {
    steps.forEach((item, order) => {
        if (order < counter + 1) item.classList.add(active);
        else item.classList.remove(active);
    })
    const progressStepsActive = document.querySelectorAll(".progress-step._active");
    progressLineActive.style.width = (progressStepsActive.length - 1) / (progressSteps.length - 1) * 100 + "%";
}

function isBtnSubmit(btn) {
    let bool;
    btn.getAttribute("type") == "submit" ? bool = true : bool = false;
    return bool;
}

function isTargetClosest(target, attr) {
    let bool;
    target.closest(attr) ? bool = true : bool = false;
    return bool;
}

// * CALL FUNC
if (formBtnGroups) {
    formBtnGroups.forEach((item) => {
        item.addEventListener("click", (e) => {
            let navBtn = e.target.parentElement;
            if (isBtnSubmit(navBtn)) return

            if (navBtn.classList.contains("btn-prev")) {
                if (isTargetClosest(navBtn, FORM_STEPS_ATTR.connect)) slidePrevForm(
                    navBtn,
                    FORM_STEPS_ATTR.connect,
                    listItemClassRemover(FORM_STEPS.connect, STATE_LIST),
                    STATE_LIST
                );
                else if (isTargetClosest(navBtn, FORM_STEPS_ATTR.survey)) slidePrevForm(
                    navBtn,
                    FORM_STEPS_ATTR.survey,
                    listItemClassRemover(FORM_STEPS.survey, STATE_LIST),
                    STATE_LIST
                );
                else if (isTargetClosest(navBtn, FORM_STEPS_ATTR.register)) slidePrevForm(
                    navBtn,
                    FORM_STEPS_ATTR.register,
                    listItemClassRemover(FORM_STEPS.register, STATE_LIST),
                    STATE_LIST
                );
                if (progressLineActive) {
                    progressCount--;
                    updateProgressbar(progressSteps, progressCount, STATE_LIST);
                }
            } else if (navBtn.classList.contains("btn-next")) {
                if (isTargetClosest(navBtn, FORM_STEPS_ATTR.connect)) slideNextForm(
                    navBtn,
                    FORM_STEPS_ATTR.connect,
                    listItemClassRemover(FORM_STEPS.connect, STATE_LIST),
                    STATE_LIST
                );
                else if (isTargetClosest(navBtn, FORM_STEPS_ATTR.survey)) slideNextForm(
                    navBtn,
                    FORM_STEPS_ATTR.survey,
                    listItemClassRemover(FORM_STEPS.survey, STATE_LIST),
                    STATE_LIST
                );
                else if (isTargetClosest(navBtn, FORM_STEPS_ATTR.register)) slideNextForm(
                    navBtn,
                    FORM_STEPS_ATTR.register,
                    listItemClassRemover(FORM_STEPS.register, STATE_LIST),
                    STATE_LIST
                );
                if (progressLineActive) {
                    progressCount++;
                    updateProgressbar(progressSteps, progressCount, STATE_LIST);
                }
            }
        })
    })
}
