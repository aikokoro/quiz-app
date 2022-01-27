'use strict'
const quizData = [
    {
        title:"Q1:リトグリがデビューしたのはいつ？",
        choices:[
            { id:1, value:"2010"},
            { id:2, value:"2012"},
            { id:3, value:"2014"},
            { id:4, value:"2016"},
        ],
        correctId: 3,
    },
    {
//問題足すならここ
    },
]

//idをHTMLから取得して定数に入れることで表示させる。
const quizSentence = document.getElementById('quiz_sentence');
const quizAnswerSelect = document.getElementById('quiz_answer_select');
const quizSendButton = document.getElementById('quiz_send_button');
const quizResult = document.getElementById('quiz_result');
const useQuizData = quizData[0];

// 選択肢
for (const choice of useQuizData.choices) {
    quizAnswerSelect.innerHTML += `<input
    id="${choice.id}" class="radio-inline__input"
    type="radio" name="answer" value="${choice.id}"><label
    class="radio-inline__label"
    for="${choice.id}">${choice.value}</label>`
}

// 問題文
quizSentence.innerHTML = `<p>${useQuizData.title}</p>`
// ボタン押下時
quizSendButton.onclick = ev => {
    // 選択肢を全部取得
    for (const element of quizAnswerSelect.querySelectorAll("input")) {
        // 選択肢の状態を確認し、チェック状態なら判定
        if (element.checked) {
            const result = element.id == useQuizData.correctId
            const str = result ? "正解です!" : "不正解です";
            quizResult.innerHTML = `<p>${str}</p>`
        }
    }
};

