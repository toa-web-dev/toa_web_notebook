const BOX_EXPAND_REM = 2.5;
const $checkboxStopBubble = document.getElementById("cb_stop_bubble");
const arrBoxes = Array.from(document.querySelectorAll(".box"));
const arrInitialBoxSize = [];

document.addEventListener("DOMContentLoaded", function () {
    // 박스 별 이벤트 등록
    arrBoxes.forEach(($box) => {
        arrInitialBoxSize.push(window.getComputedStyle($box).width);
        $box.addEventListener("click", expandBox);
    });
    //초기화 버튼 설정
    document.querySelector(".btn_init_box").onclick = initBox;
});

function initBox() {
    arrBoxes.forEach(($box, idx) => {
        $box.style.width = `${arrInitialBoxSize[idx]}`;
        $box.style.height = `${arrInitialBoxSize[idx]}`;
    });
}

function expandBox(event) {
    if ($checkboxStopBubble.checked) {
        event.stopPropagation();
    }
    const $box = event.currentTarget;
    const currentWidth = arrInitialBoxSize[arrBoxes.indexOf($box)];

    $box.style.width = `calc(${currentWidth} + ${BOX_EXPAND_REM}rem)`;
    $box.style.height = `calc(${currentWidth} + ${BOX_EXPAND_REM}rem)`;

    $box.removeEventListener("click", expandBox);
    $box.addEventListener("click", shirinkBox);
}

function shirinkBox(event) {
    if ($checkboxStopBubble.checked) {
        event.stopPropagation();
    }
    const $box = event.currentTarget;
    const currentWidth = arrInitialBoxSize[arrBoxes.indexOf($box)];

    $box.style.width = `calc(${currentWidth} `;
    $box.style.height = `calc(${currentWidth})`;

    $box.removeEventListener("click", shirinkBox);
    $box.addEventListener("click", expandBox);
}
