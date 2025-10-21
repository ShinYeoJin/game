import { timer, setences } from "./dom.js";
import { state } from "./state.js";

export const startTimer = () => {
  clearInterval(state.timerId);
  timer.textContent = `⌛ ${state.timeLimit}초`;

  state.timerId = setInterval(() => {
    state.timeLimit--;
    // timer.textContent = `⌛ ${state.timeLimit}초`;

    if (state.timeLimit <= 0) {
      clearInterval(state.timerId);
      setences.textContent = "⏳ 문장을 입력하세요!";
      timer.textContent = `⌛ ${state.timeLimit}초`;
      return;
    }
    timer.textContent = `⌛ ${state.timeLimit}초`;
  }, 1000);
};
