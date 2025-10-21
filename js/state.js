// 상태 변수
export const state = {
  level: 1,
  score: 0,
  life: 3,
  hintUsed: false,
  currentSentence: "",
  totalQuestions: 10,
  index: 0,
  timeLimit: 5,
  timerId: null,
  sentences: [
    "별이 빛나는 밤에 산책을 했다.",
    "커피 향기가 방 안을 가득 채웠다.",
    "봄바람이 살짝 볼을 스쳤다.",
    "고양이가 창문 밖을 바라보고 있었다.",
    "노을빛이 강 위에 반짝였다.",
    "책장을 넘기며 추억에 잠겼다.",
    "파란 하늘 아래로 구름이 흘러갔다.",
    "비 오는 날엔 음악이 더 잘 들린다.",
    "달빛이 길을 비추고 있었다.",
    "웃음소리가 공원에 퍼져나갔다.",
  ],
};
