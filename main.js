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

const faces = ["1", "2", "3", "4", "5", "6"];

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
  setTimeout(rollDice(faces), 500);
  btnRoll.blur();
});

const rollDice = () => {
  dice1.classList.toggle("animation1");
  dice2.classList.toggle("animation2");

  const { randomNum1, randomNum2 } = randomRollDice(faces);
  changeDiceContent(randomNum1, randomNum2);

  setTimeout(function () {
    dice1.classList.toggle("animation1");
    dice2.classList.toggle("animation2");
  }, 500);
};

const randomRollDice = (faces) => {
  const randomNum1 = faces[Math.floor(Math.random() * faces.length)];
  const randomNum2 = faces[Math.floor(Math.random() * faces.length)];
  return { randomNum1, randomNum2 };
};

const changeDiceContent = (randomNum1, randomNum2) => {
  const textDice1 = $(".diceText1");
  const textDice2 = $(".diceText2");
  textDice1.innerHTML = randomNum1;
  textDice2.innerHTML = randomNum2;
};
