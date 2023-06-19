import { STATE_LIST } from "../data/values";

const surveyNotifPopup = document.getElementById("survey-notif-popup");
const popupCloseBtns = document.querySelectorAll(".js-popup-close");
let showTimeout = 5000;

if (surveyNotifPopup) {
    setTimeout(() => {
        surveyNotifPopup.classList.add(STATE_LIST.show);
    }, showTimeout);
    
    popupCloseBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            surveyNotifPopup.classList.remove(STATE_LIST.show);
        })
    })
}
