const counterList = document.querySelectorAll(".value");
// * Upper timeoutCount - slowly, upper renderSpeed - faster
const renderSpeed = 200;
let timeoutCount = 300;

let removeListenerValue = 2000;
let renderInterval;

function animateNum(counters) {
    counters.forEach(counter => {
        const value = +counter.getAttribute("data-count-limit");
        const data = +counter.innerText;

        const time = value / renderSpeed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
        } else {
            counter.innerText = value;
        }
    });
}

function animateNumInit() {
    document.addEventListener("scroll", animateNumInit);
    if (window.scrollY < removeListenerValue)  {
        renderInterval = setInterval(animateNum(counterList), timeoutCount);
    } else {
        document.removeEventListener("scroll", animateNumInit);
        clearInterval(renderInterval);
    }
}

animateNumInit();





