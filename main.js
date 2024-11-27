const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);

const audioRoll = $("#rollDiceAudio");

const body = $("body");
const btnRoll = $("#btnRollDice");

const faceDice1 = $(".faceDice1");
const faceDice2 = $(".faceDice2");

const dice1 = $(".dice1");
const dice2 = $(".dice2");

const softDices = $("#dicesSoft");
const mediumDices = $("#dicesMedium");
const hotDices = $("#dicesHot");

audioRoll.preload = "auto";

const niveles = {
  soft: {
    parts: ["Manos", "Espalda", "Cuello", "Cabello", "Pies", "Cara"],
    actions: ["Acariciar", "Masajear", "Soplar", "Rozar", "Tocar", "Abrazar"],
  },
  medium: {
    parts: [
      "Espalda baja",
      "Muslos",
      "Hombros",
      "Cintura",
      "Rodillas",
      "Pecho",
    ],
    actions: [
      "Acariciar",
      "Besar",
      "Masajear",
      "Presionar",
      "Morder softmente",
      "Lamer",
    ],
  },
  hot: {
    parts: [
      "Cuello",
      "Labios",
      "Parte interna de los muslos",
      "Abdomen",
      "Zona íntima",
      "Pecho",
    ],
    actions: [
      "Besar apasionadamente",
      "Lamer",
      "Morder softmente",
      "Explorar",
      "Masajear intensamente",
      "Acariciar provocativamente",
    ],
  },
};

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

  if (softDices.checked) {
    const { randomVal1, randomVal2 } = randomRollDice(
      niveles.soft.parts,
      niveles.soft.actions
    );
    changeDiceContent(randomVal1, randomVal2);
  } else if (mediumDices.checked) {
    const { randomVal1, randomVal2 } = randomRollDice(
      niveles.medium.parts,
      niveles.medium.actions
    );
    changeDiceContent(randomVal1, randomVal2);
  } else if (hotDices.checked) {
    const { randomVal1, randomVal2 } = randomRollDice(
      niveles.hot.parts,
      niveles.hot.actions
    );
    changeDiceContent(randomVal1, randomVal2);
  }

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
