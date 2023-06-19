import { STATE_LIST } from "../data/values";

const surveyNotifPopup = document.getElementById("survey-notif-popup");
const surveyNotifPopupClose = document.getElementById("survey-notif-popup-close");
let showTimeout = 5000;

setTimeout(() => {
    surveyNotifPopup.classList.add(STATE_LIST.show);
}, showTimeout);

surveyNotifPopupClose.addEventListener("click", (e) => {
    surveyNotifPopup.classList.remove(STATE_LIST.show);
})
