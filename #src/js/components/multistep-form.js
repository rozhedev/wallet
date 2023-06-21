import { STATE_LIST } from '../data/values';

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const progressLineActive = document.getElementById("progress-line-active");
let surveyCount, connectCount, registerCount, progressCount;
surveyCount = connectCount = registerCount = progressCount = 1;

const MODAL_STEPS = {
    survey: document.querySelectorAll("[data-step='form-survey'"),
    connect: document.querySelectorAll("[data-step='form-connect'"),
    register: document.querySelectorAll("[data-step='form-register'"),
}

const MULTIFORMS_ATTR = {
    survey: "[data-multiform-type='register']",
    connect: "[data-multiform-type='survey']",
    register: "[data-multiform-type='connect']",
}

function updateFormsSteps(steps, counter, { active }) {
    steps.forEach((stepItem) => {
        if (stepItem.classList.contains(active)) stepItem.classList.remove(active)
    })
    steps[counter].classList.add(active);
}

function updateProgressbar(steps, counter, { active }) {
    steps.forEach((item, order) => {
        if (order < counter + 1) item.classList.add(active);
        else item.classList.remove(active);
    })

    const progressStepsActive = document.querySelectorAll(".progress-step._active");
    progressLineActive.style.width = (progressStepsActive.length - 1) / (progressSteps.length - 1) * 100 + "%";
}

function isLinkedForm (steps, elem, attr) {
    return steps.length !== 0 && elem.closest(attr);
}

if (nextBtns && prevBtns) {
    nextBtns.forEach((btn) => {
        if (btn.getAttribute("type") == "submit") return
        btn.addEventListener("click", (e) => {
            if (formSteps.length == 0) return
            if (MODAL_STEPS.register.length !== 0 && btn.closest(MULTIFORMS_ATTR.survey)) {
                updateFormsSteps(MODAL_STEPS.register, registerCount, STATE_LIST);
                registerCount++;
            }
            if (MODAL_STEPS.survey.length !== 0 && btn.closest(MULTIFORMS_ATTR.connect)) {
                updateFormsSteps(MODAL_STEPS.survey, surveyCount, STATE_LIST);
                surveyCount++;
            }
            if (MODAL_STEPS.connect.length !== 0 && btn.closest(MULTIFORMS_ATTR.register)) {
                updateFormsSteps(MODAL_STEPS.connect, connectCount, STATE_LIST);
                connectCount++;
            }
            if (progressLineActive) updateProgressbar(progressSteps, progressCount, STATE_LIST);
        })
    })
    prevBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (formSteps.length == 0) return
            if (MODAL_STEPS.survey.length !== 0 && btn.closest(MULTIFORMS_ATTR.survey)) {
                updateFormsSteps(MODAL_STEPS.survey, surveyCount, STATE_LIST);
                surveyCount--;
            }
            if (MODAL_STEPS.connect.length !== 0 && btn.closest(MULTIFORMS_ATTR.connect)) {
                updateFormsSteps(MODAL_STEPS.connect, connectCount, STATE_LIST);
                connectCount--;
            }
            if (MODAL_STEPS.register.length !== 0 && btn.closest(MULTIFORMS_ATTR.register)) {
                updateFormsSteps(MODAL_STEPS.register, registerCount, STATE_LIST);
                registerCount--;
            }
            if (progressLineActive) updateProgressbar(progressSteps, progressCount, STATE_LIST);
        })
    })
}
