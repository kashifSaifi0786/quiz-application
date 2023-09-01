import { Answer } from "./interface";

export const combineArr = (arr: string[], value: string): string[] => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  arr.splice(randomIndex, 0, value);

  return arr;
};

export const formatTime = (time: number) => {
  return `${Math.floor(time / 60).toLocaleString("en-us", {
    minimumIntegerDigits: 2,
  })}:${(time % 60).toLocaleString("en-us", {
    minimumIntegerDigits: 2,
  })}`;
};

export const checkPass = (answers: Answer[]): string => {
  let score = 0;
  let percentage = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].correct_answer === answers[i].your_answer) {
      score = score + 1;
    }
  }

  percentage = (score / answers.length) * 100;
  if (percentage > 50) return "Pass";

  return "Fail";
};
