const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);

faces = ["1", "2", "3", "4", "5", "6"];

const body = $("body");
const faceDice1 = $(".faceDice1");
const faceDice21 = $(".faceDice2");

const dice1 = $(".dice1");
const dice2 = $(".dice2");

const audioRoll = $("#rollDiceAudio");

audioRoll.preload = "auto";

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
  // initial.classList.remove("initial");

  front1.classList.remove("visible");
  back1.classList.remove("visible");
  left1.classList.remove("visible");
  right1.classList.remove("visible");
  bottom1.classList.remove("visible");
  top1.classList.remove("visible");

  front2.classList.remove("visible");
  back2.classList.remove("visible");
  left2.classList.remove("visible");
  right2.classList.remove("visible");
  bottom2.classList.remove("visible");
  top2.classList.remove("visible");

  const { randomNum1, randomNum2 } = randomRollDice();

  switch (randomNum1) {
    case 0:
      front1.classList.add("visible");
      break;
    case 1:
      back1.classList.add("visible");
      break;
    case 2:
      left1.classList.add("visible");
      break;
    case 3:
      right1.classList.add("visible");
      break;
    case 4:
      bottom1.classList.add("visible");
      break;
    case 5:
      top1.classList.add("visible");
      break;
  }

  switch (randomNum2) {
    case 0:
      front2.classList.add("visible");
      break;
    case 1:
      back2.classList.add("visible");
      break;
    case 2:
      left2.classList.add("visible");
      break;
    case 3:
      right2.classList.add("visible");
      break;
    case 4:
      bottom2.classList.add("visible");
      break;
    case 5:
      top2.classList.add("visible");
      break;
  }

  setTimeout(function () {
    dice1.classList.toggle("animation1");
    dice2.classList.toggle("animation2");
  }, 500);
};

const randomRollDice = () => {
  const randomNum1 = Math.floor(Math.random() * 6);
  const randomNum2 = Math.floor(Math.random() * 6);
  return { randomNum1, randomNum2 };
};
