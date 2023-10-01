const targetTextElement = document.getElementById("targetText");
const newTextInput = document.getElementById("newText");

let sampleTexts = ["hello", "programming"];
let currentText = "";
let inputIndex = 0;
let currentTextIndex = 0; 

function setNewText() {
    inputIndex = 0;
    currentText = sampleTexts[currentTextIndex];  // 変更：ランダムではなく順番に取得
    targetTextElement.textContent = currentText;

    currentTextIndex++;  // インデックスを1増やす
    if (currentTextIndex >= sampleTexts.length) {  // リストの最後に到達したら0にリセット
        currentTextIndex = 0;
    }
}

function addNewText() {
    const newText = newTextInput.value.trim();
    if (newText) {
        sampleTexts.push(newText);
        newTextInput.value = '';
        setNewText();
    }
}

document.body.addEventListener('keydown', (e) => {
    // テキストボックスがフォーカスされている場合は何もしない
    if (document.activeElement === newTextInput) {
        return;
    }

    // スペースキーが押された場合、デフォルトの挙動（スクロール）をキャンセル
    if (e.key === ' ') {
        e.preventDefault();
    }

    if (e.key === currentText[inputIndex]) {
        inputIndex++;
        targetTextElement.innerHTML = `<span style="color:black">${currentText.slice(0, inputIndex)}</span>${currentText.slice(inputIndex)}`;
        if (inputIndex === currentText.length) {
            setTimeout(setNewText, 1000);
        }
    }
});




setNewText();
