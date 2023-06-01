import { COMMON_NODES } from "../data/values";

const copyBtns = document.querySelectorAll(".copy-btn");
const btnPassphrase = document.getElementById("copy-btn-passphrase");
const btnPassphraseContent = document.querySelector("#copy-btn-passphrase span");
let passStr = "";

function getCopyVal(str) {
    return navigator.clipboard.writeText(str);
}

if (btnPassphrase && btnPassphraseContent) {
    btnPassphrase.addEventListener("click", () => {
        for (const inp of COMMON_NODES.passphraseInputs) {
            passStr += inp.value + " ";
        }
        getCopyVal(passStr);
        btnPassphraseContent.textContent = "Copied";
    })
}

COMMON_NODES.modalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const btnAddress = document.getElementById("copy-btn-address");
        const btcWalletAddress = document.getElementById("btc-address");
        const btnAddressIconSrcset = document.querySelector("#copy-btn-address source");
        let iconPath = "../img/icons/interface/copytoclipboard_success.svg";    

        
        if (btnAddress && btcWalletAddress) {
            btnAddress.addEventListener("click", () => {
                let address = btcWalletAddress.textContent;
                getCopyVal(address);
                btnAddressIconSrcset.setAttribute("srcset", iconPath);
            })
        }
    })
})


// copyBtns.forEach((btn) => {
//     btn.addEventListener("click", () => {
       
//     })
// })