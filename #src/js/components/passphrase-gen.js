import { COMMON_NODES } from "../data/values";
import { bip39Arr } from "../data/bip39";

function genPassphrase(inpList, wordArr) {
    let randomIndex = 0;
    let tempArr = [];
    // let tempIndex = 0;

    for (let i = 0; i < inpList.length; i++) {
        randomIndex = Math.round(Math.random() * wordArr.length);

        tempArr.push(wordArr[randomIndex]);
    }
    inpList.forEach((inp, i) => {
        inp.value = tempArr[i];
    });
}

genPassphrase(COMMON_NODES.passphraseInputs, bip39Arr);