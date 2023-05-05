const promoactionsBtns = document.querySelectorAll(".promoactions-item .btn[type='button']");
const promoactionsLinks = document.querySelectorAll(".promoactions-item .btn[type='submit']");

promoactionsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.textContent);
    })
})

promoactionsLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log(link.textContent);
    })
})