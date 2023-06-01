export function setDecimalNumber(inp, num) {
    // цифра устанавливает количество цифр после запятой, т.е. если 3, то максимум 2 цифры после запятой
    if (inp.value.indexOf(".") != '-1') {
        inp.value = inp.value.substring(0, inp.value.indexOf(".") + num);
    }
}