import { COMMON_NODES } from "../data/values";
import { setDecimalNumber } from "../modules/validation";
const sendAmountInp = document.getElementById("send-amount");
const sendFeeInp = document.getElementById("send-fee");

COMMON_NODES.modalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (sendFeeInp && sendAmountInp) {
            sendAmountInp.addEventListener("input", (e) => {
                setDecimalNumber(sendAmountInp, 8);
                sendFeeInp.value = (sendAmountInp.value * 0.0345).toFixed(8);
            })
        }
    })
})
