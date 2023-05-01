import { STATE_LIST } from "../data/values";

const smallScreenNotice = document.querySelector(".small-screen-notice");
let smBreakpoint = 968;

function checkScreenWidth(messageBlock, width, { active }) {
    if (messageBlock && document.documentElement.clientWidth < width) {
        messageBlock.classList.add(active);
    }
}

if (smallScreenNotice) {
    document.addEventListener("DOMContentLoaded", (e) => {
        checkScreenWidth(smallScreenNotice, smBreakpoint, STATE_LIST);
    });
}