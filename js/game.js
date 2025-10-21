import { state } from "./state.js";
import { setences, timer, title, status, question, answer, result, finalScore } from "./dom.js";
import { startTimer } from "./timer.js";

export const init = () => {
  title.style.display = "none";
  status.style.display = "none";
  question.style.display = "none";
  answer.style.display = "none";
  result.style.display = "none";
};

export const updateStatus = () => {
  document.querySelector(".level").textContent = `레벨: ${state.level}/10`;
  document.querySelector(".score").textContent = `점수: ${state.score}`;
  document.querySelector(".life").textContent = `기회: ${"❤️".repeat(state.life)}`;
};

export const startGame = () => {
  if (state.index >= state.totalQuestions) {
    showResult();
    return;
  }

  const randomIndex = Math.floor(Math.random() * state.sentences.length);
  state.currentSentence = state.sentences[randomIndex];
  setences.textContent = state.currentSentence;

  updateStatus();

  state.timeLimit = 6 - state.level;
  timer.textContent = `⌛ ${state.timeLimit}초`;

  startTimer();
};

export const showResult = () => {
  title.style.display = "none";
  status.style.display = "none";
  question.style.display = "none";
  answer.style.display = "none";

  result.style.display = "flex";
  finalScore.textContent = `최종 점수: ${state.score}점`;
};
