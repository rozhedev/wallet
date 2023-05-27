
const copyBtns = document.querySelectorAll(".copy-btn");
const btnPassphrase = document.getElementById("copy-btn-passphrase");
const btnPassphraseContent = document.querySelector("#copy-btn-passphrase span");
const passphraseInputs = document.querySelectorAll(".passphrase-item .inp");
let passStr = "";

btnPassphrase.addEventListener("click", () => {
    for (const inp of passphraseInputs) {
        passStr += inp.value + " ";
    }
    console.log(passStr);
    navigator.clipboard.writeText(passStr);
    btnPassphraseContent.textContent = "Copied";
})

// copyBtns.forEach((btn) => {
//     btn.addEventListener("click", () => {
       
//     })
// })