import { COMMON_NODES } from "../data/values";

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

const btnAddress = document.getElementById("copy-btn-address");
const btcWalletAddress = document.getElementById("btc-address");
const dropdownCopyBtn = document.querySelectorAll(".dropdown-copy-btn");

if (btnAddress && btcWalletAddress) {
    let address = btcWalletAddress.textContent;
    const btnAddressIconSrcset = document.querySelector("#copy-btn-address source");
    let iconPath = "../img/icons/interface/copytoclipboard_success.svg";

    btnAddress.addEventListener("click", () => {
        getCopyVal(address);
        btnAddressIconSrcset.setAttribute("srcset", iconPath);
    })
    dropdownCopyBtn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            getCopyVal(address);
            let btnContent = this.querySelector("span");
            btnContent.textContent = "Address copied";
        })
    })
}
