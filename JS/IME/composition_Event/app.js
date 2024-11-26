import { ChatBubble } from "./components/ChatBubble.js";

window.onload = () => {
    initEventListener();
};
const $btn_button = document.body.querySelector(".btn_enter");
const $chat_input = document.body.querySelector("#chat_input");
const $chat_log = document.body.querySelector("#chat_log");
let isComposition = false;

/**
 * @description 이벤트리스너 초기화 함수
 * - IME로 인해 keydown 이벤트 콜백함수 실행 시 "마지막 한글 문자를 인수로 콜백함수가 한 번 더 실행"되는 오류 발생
 * - 트러블 슈팅: Input Method Edito(IME)를 고려하여 코드 수정
 * - 문자 조합이 끝난 상태(isComposition === false)일 때, Enter || NumpadEnter 입력 시 채팅이 추가되도록 조건문 수정
 */
function initEventListener() {
    window.addEventListener("compositionstart", () => {
        isComposition = true;
    });
    window.addEventListener("compositionend", () => {
        isComposition = false;
    });

    $btn_button.addEventListener("click", loggingBubble);

    $chat_input.addEventListener("keydown", (e) => {
        console.log("isCompostion:",isComposition );
       if (!isComposition && (e.code === "Enter" || e.code === "NumpadEnter")) loggingBubble();
    });
}

/**
 * @description 1. 채팅창에 ChatBubble 컴포넌트를 추가합니다.
 *              2.  입력한 텍스트 길이가 0보다 클때 ChatBubble을 추가하고 chat_input에 focus를 유지합니다.
 */
function loggingBubble() {
    const chatText = $chat_input.value;
    console.log(chatText);

    if (chatText.length > 0) {
        $chat_log.appendChild(ChatBubble(chatText));
        $chat_log.scrollTop = $chat_log.scrollHeight;
    }
    $chat_input.value = "";
    $chat_input.focus();
}
