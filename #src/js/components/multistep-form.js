const CLASS_LIST = {
    active: "_active",
}

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const progressLineActive = document.getElementById("progress-line-active");

let formStepsNum = 0;

if (nextBtns && prevBtns) {
    nextBtns.forEach((btn) => {
        if (btn.getAttribute("type") != "submit") {
            btn.addEventListener("click", (e) => {
                formStepsNum++;
                updateFormsSteps();
                updateProgressbar();
            })
        }
    })

    prevBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            formStepsNum--;
            updateFormsSteps();
            updateProgressbar();

        })
    })
}

function updateFormsSteps() {
    formSteps.forEach((stepItem) => {
        if (stepItem.classList.contains(CLASS_LIST.active)) stepItem.classList.remove(CLASS_LIST.active)
    })
    formSteps[formStepsNum].classList.add(CLASS_LIST.active);
}

function updateProgressbar() {
    progressSteps.forEach((progressItem, order) => {
        if (order < formStepsNum + 1) progressItem.classList.add(CLASS_LIST.active);
        else progressItem.classList.remove(CLASS_LIST.active);
    })

    const progressStepsActive = document.querySelectorAll(".progress-step._active");

    progressLineActive.style.width = (progressStepsActive.length - 1) / (progressSteps.length - 1) * 100 + "%";
}
