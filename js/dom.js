// 요소 선택
export const startScreen = document.querySelector("#startScreen");
export const startBtn = document.querySelector("#start");
export const title = document.querySelector(".title");
export const status = document.querySelector(".status");
export const question = document.querySelector(".question");
export const setences = document.querySelector("#setences");
export const answer = document.querySelector(".answer");
export const input = document.querySelector("#input");
export const checkBtn = document.querySelector("#butn");
export const timer = document.querySelector("#timer");
export const hintBtn = document.querySelector("#hint");
export const retryBtn = document.querySelector("#retry");
export const result = document.querySelector(".result");
export const finalScore = document.querySelector(".final-score");
export const replayBtn = document.querySelector(".replay-btn");

// // 초기 화면 설정
// // 페이지를 처음 열면 시작화면만 보이도록 나머지 화면 전부 숨김.
// const init = () => {
//   title.style.display = "none";
//   status.style.display = "none";
//   question.style.display = "none";
//   answer.style.display = "none";
//   result.style.display = "none";
// };

// // 시작 버튼 클릭 시
// startBtn.addEventListener("click", () => {
//   startScreen.style.display = "none";
//   title.style.display = "flex";
//   status.style.display = "flex";
//   question.style.display = "flex";
//   answer.style.display = "flex";
//   startGame();
// });

// // 게임 시작
// const startGame = () => {
//   if (state.index >= state.totalQuestions) {
//     showResult();
//     return;
//   }

//   const randomIndex = Math.floor(Math.random() * sentences.length);
//   state.currentSentence = sentences[randomIndex];
//   setences.textContent = state.currentSentence;

//   updateStatus();

//   // 문장 표시 시간: 레벨 1 = 5초, 이후 레벨마다 1초 감소
//   state.timeLimit = 6 - state.level;
//   timer.textContent = `⌛ ${state.timeLimit}초`;

//   // 타이머
//   clearInterval(state.timerId);
//   state.timerId = setInterval(() => {
//     state.timeLimit--;
//     timer.textContent = `⌛ ${state.timeLimit}초`;

//     if (state.timeLimit <= 0) {
//       clearInterval(state.timerId);
//       setences.textContent = "⏳ 문장을 입력하세요!";
//     }
//   }, 1000);
// };

// // 상태창 갱신
// const updateStatus = () => {
//   document.querySelector(".level").textContent = `레벨: ${state.level}/10`;
//   document.querySelector(".score").textContent = `점수: ${state.score}`;
//   document.querySelector(".life").textContent = `기회: ${"❤️".repeat(state.life)}`;
// };

// // 정답 확인
// checkBtn.addEventListener("click", () => {
//   const userAnswer = input.value.trim();
//   input.value = "";

//   if (!userAnswer) return;

//   if (userAnswer === state.currentSentence) {
//     state.score += 10;
//     state.level++;
//   } else {
//     state.life--;
//     if (state.life <= 0) {
//       showResult();
//       return;
//     }
//   }

//   state.index++;
//   startGame();
// });

// // 문장을 작성하고 엔터를 누를때, 확인 버튼을 눌렀을 때와 같은 효과를 나타냄
// input.addEventListener("keydown", (e) => e.key === "Enter" && checkBtn.click());

// // 힌트 버튼
// hintBtn.addEventListener("click", () => {
//   if (state.hintUsed) {
//     setences.textContent = "이미 힌트를 한번 사용했어요!😅";
//     const backToInputMsg = () => (setences.textContent = "⏳ 문장을 입력하세요!");
//     setTimeout(backToInputMsg, 2000);
//     return;
//   }

//   state.hintUsed = true;
//   setences.textContent = state.currentSentence;

//   const hideHint = () => (setences.textContent = "⏳ 문장을 입력하세요!");
//   setTimeout(hideHint, 3000);
// });

// // 다시 도전 버튼
// retryBtn.addEventListener("click", () => {
//   location.reload();
// });

// // 결과 표시
// const showResult = () => {
//   title.style.display = "none";
//   status.style.display = "none";
//   question.style.display = "none";
//   answer.style.display = "none";

//   result.style.display = "flex";
//   finalScore.textContent = `최종 점수: ${state.score}점`;
// };

// // 리플레이
// replayBtn.addEventListener("click", () => {
//   location.reload();
// });

// // 초기 상태 실행
// init();
