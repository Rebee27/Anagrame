const home = document.getElementById("home-bttn");
const lessons = document.getElementById("misters-bttn");
const anagrams = document.getElementById("anagrams-bttn");
const logo = document.getElementById("logo");

function goToLessons() {
  lessons.addEventListener("click", () => {
    window.location.href = "../lessons-page/lessons.html";
  });
}
goToLessons();

function gotToAnagrams() {
  anagrams.addEventListener("click", () => {
    window.location.href = "../anagrams-page/anagrams.html";
  });
}
gotToAnagrams();

function goToHome() {
  home.addEventListener("click", () => {
    window.location.href = "../home-page/home.html";
  });
}
goToHome();

function goToLogo() {
  logo.addEventListener("click", () => {
    window.location.href = "../home-page/home.html";
  });
}
goToLogo();

function setPointer() {
  home.style.cursor = "pointer";
  anagrams.style.cursor = "pointer";
  lessons.style.cursor = "pointer";
  logo.style.cursor = "pointer";
}
setPointer();

let gameOver = Boolean(localStorage.getItem("gameOver"));

const words = [
  {
    text: "CAL",
    random: "ALC",
    image: "../utils/cal.jpg",
    score: 4,
  },
  {
    text: "NOR",
    random: "RON",
    image: "../utils/nor.jpg",
    score: 4,
  },
  {
    text: "STELE",
    random: "TELSE",
    image: "../utils/stele.jpg",
    score: 9,
  },
  {
    text: "AVION",
    random: "NOVAI",
    image: "../utils/avion.jpg",
    score: 9,
  },
  {
    text: "OMIDA",
    random: "MIODA",
    image: "../utils/omida.jpg",
    score: 9,
  },
  {
    text: "FLORI",
    random: "LIFOR",
    image: "../utils/flori.jpg",
    score: 9,
  },
  {
    text: "MUNTE",
    random: "TENUM",
    image: "../utils/munte.jpg",
    score: 9,
  },
  {
    text: "INIMA",
    random: "MINAI",
    image: "../utils/inima.jpg",
    score: 9,
  },
  {
    text: "LUNA",
    random: "NALU",
    image: "../utils/luna.jpg",
    score: 11,
  },
  {
    text: "ALBINA",
    random: "LANIBA",
    image: "../utils/albina.jpeg",
    score: 11,
  },
  {
    text: "ELEFANT",
    random: "EFANELT",
    image: "../utils/elefant.jpg",
    score: 16,
  },
];

const corectWordAudioElement = document.createElement("audio");
corectWordAudioElement.src = "../utils/sounds/correct_word.mp3";

const wrongWordAudioElement = document.createElement("audio");
wrongWordAudioElement.src = "../utils/sounds/wrong_word.mp3";

const endGameAudioElement = document.createElement("audio");
endGameAudioElement.src = "../utils/sounds/endgame.mp3";

if (!localStorage.getItem("wordIndex")) {
  localStorage.setItem("wordIndex", "0");
}

if (!localStorage.getItem("score")) {
  localStorage.setItem("score", "0");
}

if (!localStorage.getItem("gameOver")) {
  localStorage.setItem("gameOver", "false");
}

if (!localStorage.getItem("correct")) {
  localStorage.setItem("correct", "false");
}

let wordIndex = Number(localStorage.getItem("wordIndex"));
let cachedScore = Number(localStorage.getItem("score"));
let position = wordIndex;
let isGameOver = false;
let totalScore = cachedScore;

const closeButton = document.querySelector("dialog button");
const dialogText = document.querySelector("dialog p");

const animationContainer = document.querySelector(".animation-container");

function checkWord() {
  let correct = Boolean(localStorage.getItem("correct"));

  const listOfLetters = document.querySelector(".anagram-letters");
  if (position < words.length) {
    for (let i = 0; i < listOfLetters.children.length; i++) {
      if (
        listOfLetters.children[i].textContent !==
        words[position]["text"].charAt(i)
      ) {
        correct = false;
        localStorage.setItem("correct", "false");
      }
    }
  } else {
    correct = true;
    localStorage.setItem("correct", "true");
  }

  if (correct === true) {
    position++;
    if (!gameOver) {
      localStorage.setItem("wordIndex", position.toString());
    }
    if (position < words.length) {
      const score = document.querySelector(".score");
      totalScore += words[position - 1]["score"];
      localStorage.setItem("score", totalScore.toString());
      score.textContent = `SCOR: ${totalScore}`;

      corectWordAudioElement.play();

      // Play animation and move to the next word after animation disappears
      // playAnimation(() => {
      //   buildTable(words[position]);
      // });
    } else if (position === words.length) {
      if (!gameOver) {
        const score = document.querySelector(".score");
        totalScore += words[position - 1]["score"];
        score.textContent = `SCOR: ${totalScore}`;
        gameOver = true;
        localStorage.setItem("correct", "true");
        localStorage.setItem("gameOver", "true");
        endGameAudioElement.play();
        localStorage.setItem("wordIndex", `${position - 1}`);
        localStorage.setItem("score", `${100}`);
      }
      // Play animation for the last word
      // playAnimation();
    }
  } else {
    wrongWordAudioElement.play();
  }

  playAnimation(() => {
    position = Number(localStorage.getItem("wordIndex"));
    buildTable(words[position]);
  });
}

function playAnimation(callback) {
  const animationContainer = document.querySelector(".animation-container");
  animationContainer.innerHTML = ""; // Clear previous content

  // Create and append your animation element (like or smiley face)
  const animationElement = document.createElement("div");
  animationElement.classList.add("animation");

  const correct = Boolean(localStorage.getItem("correct"));
  if (correct === true) {
    animationElement.classList.add("animation-correct");
  } else {
    animationElement.classList.add("animation-wrong");
  }

  animationContainer.appendChild(animationElement);

  // Trigger animation
  setTimeout(() => {
    animationElement.classList.add("play");
  }, 0);

  // Clear animation after some time (adjust the delay according to your needs)
  setTimeout(() => {
    animationElement.classList.remove("play");
    animationContainer.innerHTML = "";

    // Call the callback function after the animation is complete
    if (callback) {
      callback();
    }
  }, 2000);
}

const verifyButton = document.querySelector(".verify-button");

verifyButton.addEventListener("click", checkWord);

buildTable(words[position]);

function buildTable(word) {
  const soundElement = document.createElement("i");
  soundElement.classList.add("fas", "fa-volume-up", "soundIcon");
  soundElement.addEventListener("mouseover", () => {
    wordAudioElement.play();
  });

  const anagramSection = document.querySelector(".anagram");
  const anagramLettersSection = document.querySelector(".anagram-letters");

  const scoreElement = document.querySelector(".score");
  scoreElement.textContent = `SCOR: ${totalScore}`;
  scoreElement.classList.add("score");

  anagramSection.innerHTML = "";
  anagramLettersSection.innerHTML = "";

  // Add The Word
  const anagramTextElement = document.createElement("span");
  anagramTextElement.classList.add("word");
  anagramTextElement.textContent = word["text"];
  anagramSection.appendChild(anagramTextElement);

  const wordAudioElement = document.createElement("audio");
  wordAudioElement.src = `../utils/sounds/${word["text"].toLowerCase()}.mp3`;

  anagramSection.appendChild(soundElement);

  // Add the iamge
  const anagramImageElement = document.createElement("img");
  anagramImageElement.width = 220;
  anagramImageElement.height = 200;
  anagramImageElement.alt = word["text"];
  anagramImageElement.src = word["image"];
  anagramSection.appendChild(anagramImageElement);

  if (localStorage.getItem("gameOver") === "false") {
    gameOver = false;
  } else {
    gameOver = true;
  }

  if (!gameOver) {
    // Add the letters
    for (let i = 0; i < word["random"].length; i++) {
      const anagramLetterElement = document.createElement("span");
      anagramLetterElement.classList.add("letter");
      anagramLetterElement.textContent = word["random"].charAt(i);
      anagramLetterElement.draggable = true;
      anagramLettersSection.appendChild(anagramLetterElement);
    }
  } else {
    // Add the letters
    for (let i = 0; i < word["random"].length; i++) {
      const anagramLetterElement = document.createElement("span");
      anagramLetterElement.classList.add("letter");
      anagramLetterElement.textContent = word["text"].charAt(i);
      anagramLetterElement.draggable = true;
      anagramLettersSection.appendChild(anagramLetterElement);
    }
  }

  const letters = document.querySelectorAll(".letter");
  const sortableList = document.querySelector(".anagram-letters");

  letters.forEach((letter) => {
    letter.addEventListener("dragstart", () => {
      setTimeout(() => {
        letter.classList.add("draging");
      }, 0);
    });

    letter.addEventListener("dragend", () => {
      letter.classList.remove("draging");
    });
  });

  const initSortableLisst = (e) => {
    e.preventDefault();
    const draggingItem = sortableList.querySelector(".draging");

    const siblings = [
      ...sortableList.querySelectorAll(".letter:not(.draging)"),
    ];

    let nextSibling = siblings.find((sibling) => {
      return e.clientX <= sibling.offsetLeft + sibling.offsetWidth / 2;
    });

    sortableList.insertBefore(draggingItem, nextSibling);
    colorLetters();
  };

  sortableList.addEventListener("dragover", initSortableLisst);
  sortableList.addEventListener("dragenter", (e) => e.preventDefault());

  const colorLetters = () => {
    const sortableList = document.querySelector(".anagram-letters");
    for (let i = 0; i < sortableList.children.length; i++) {
      sortableList.children[i].classList.remove("correct");
      sortableList.children[i].classList.remove("wrong");
    }

    for (let i = 0; i < sortableList.children.length; i++) {
      if (sortableList.children[i].textContent === word["text"].charAt(i)) {
        sortableList.children[i].classList.add("correct");
      } else {
        sortableList.children[i].classList.add("wrong");
      }
    }
  };

  colorLetters();
}
