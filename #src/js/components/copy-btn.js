import { COMMON_NODES } from "../data/values";

const copyBtns = document.querySelectorAll(".copy-btn");
const btnPassphrase = document.getElementById("copy-btn-passphrase");
const btnPassphraseContent = document.querySelector("#copy-btn-passphrase span");
let passStr = "";

if (btnPassphrase) {
    btnPassphrase.addEventListener("click", () => {
        for (const inp of COMMON_NODES.passphraseInputs) {
            passStr += inp.value + " ";
        }
        navigator.clipboard.writeText(passStr);
        btnPassphraseContent.textContent = "Copied";
    })
}

// copyBtns.forEach((btn) => {
//     btn.addEventListener("click", () => {
       
//     })
// })