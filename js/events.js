import { startBtn, startScreen, checkBtn, input, hintBtn, retryBtn, replayBtn, setences } from "./dom.js";
import { startGame, updateStatus, showResult } from "./game.js";
import { state } from "./state.js";

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  document.querySelector(".title").style.display = "flex";
  document.querySelector(".status").style.display = "flex";
  document.querySelector(".question").style.display = "flex";
  document.querySelector(".answer").style.display = "flex";
  startGame();
});

checkBtn.addEventListener("click", () => {
  const userAnswer = input.value.trim();
  input.value = "";

  if (!userAnswer) return;

  if (userAnswer === state.currentSentence) {
    state.score += 10;
    state.level++;
    updateStatus();
  } else {
    state.life--;
    updateStatus();
    if (state.life <= 0) {
      showResult();
      return;
    }
  }

  state.index++;
  startGame();
});

input.addEventListener("keydown", (e) => e.key === "Enter" && checkBtn.click());

hintBtn.addEventListener("click", () => {
  if (state.hintUsed) {
    setences.textContent = "이미 힌트를 한번 사용했어요!😅";
    const backToInputMsg = () => (setences.textContent = "⏳ 문장을 입력하세요!");
    setTimeout(backToInputMsg, 2000);
    return;
  }

  state.hintUsed = true;
  setences.textContent = state.currentSentence;

  const hideHint = () => (setences.textContent = "⏳ 문장을 입력하세요!");
  setTimeout(hideHint, 3000);
});

retryBtn.addEventListener("click", () => location.reload());
replayBtn.addEventListener("click", () => location.reload());
