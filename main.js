const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);

const audioRoll = $("#rollDiceAudio");

const body = $("body");
const btnRoll = $("#btnRollDice");

const faceDice1 = $(".faceDice1");
const faceDice2 = $(".faceDice2");

const dice1 = $(".dice1");
const dice2 = $(".dice2");

audioRoll.preload = "auto";

const face1 = ["1", "2", "3", "4", "5", "6"];
const face2 = ["1", "2", "3", "4", "5", "6"];
const sexFace1 = ["a", "b", "c", "d", "c"];
const sexFace2 = ["x", "y", "z", "w", "v"];

body.addEventListener("keypress", (e) => {
  let code = e.key;
  if (code === " ") {
    audioRoll.currentTime = 0;
    audioRoll.play();
    setTimeout(rollDice(), 500);
  }
  console.log(code);
});

btnRoll.addEventListener("click", () => {
  audioRoll.currentTime = 0;
  audioRoll.play();
  setTimeout(rollDice(), 500);
  btnRoll.blur();
});

const rollDice = () => {
  dice1.classList.toggle("animation1");
  dice2.classList.toggle("animation2");

  const { randomVal1, randomVal2 } = randomRollDice(sexFace1, sexFace2);
  changeDiceContent(randomVal1, randomVal2);

  setTimeout(function () {
    dice1.classList.toggle("animation1");
    dice2.classList.toggle("animation2");
  }, 500);
};

const randomRollDice = (face1, face2) => {
  const randomVal1 = face1[Math.floor(Math.random() * face1.length)];
  const randomVal2 = face2[Math.floor(Math.random() * face2.length)];
  return { randomVal1, randomVal2 };
};

const changeDiceContent = (randomVal1, randomVal2) => {
  const textDice1 = $(".diceText1");
  const textDice2 = $(".diceText2");
  textDice1.innerHTML = randomVal1;
  textDice2.innerHTML = randomVal2;
};
