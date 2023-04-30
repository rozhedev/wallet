const smallScreenNotice = document.querySelector(".small-screen-notice");
let smBreakpoint = 968;

function checkScreenWidth(messageBlock, width) {
    if (messageBlock && document.documentElement.clientWidth < width) {
        messageBlock.classList.add("_active");
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    checkScreenWidth(smallScreenNotice, smBreakpoint);
})