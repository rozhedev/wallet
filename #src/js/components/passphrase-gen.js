import { COMMON_NODES } from "../data/values";
import { bip39Arr } from "../data/bip39";

function genPassphrase(inpList, wordArr) {
    let randomIndex = 0;
    let tempArr = [];

    for (let i = 0; i < inpList.length; i++) {
        randomIndex = getRandomIndex(wordArr);
        tempArr.push(wordArr[randomIndex]);
        if (
            i >= 1 &&
            tempArr[i] == tempArr[i - 1]
        ) tempArr.push(wordArr[getRandomIndex(wordArr)])
    }

    inpList.forEach((inp, i) => {
        inp.value = tempArr[i];
    });
}

function getRandomIndex(wordArr) {
    return Math.round(Math.random() * wordArr.length);
}

genPassphrase(COMMON_NODES.passphraseInputs, bip39Arr);