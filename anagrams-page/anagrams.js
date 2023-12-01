const home = document.getElementById("home-bttn");
const lessons = document.getElementById("misters-bttn");
const anagrams = document.getElementById("anagrams-bttn");

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

function setPointer() {
  home.style.cursor = "pointer";
  anagrams.style.cursor = "pointer";
  lessons.style.cursor = "pointer";
}
setPointer();

const words = [
  {
    text: "ALBINA",
    random: "LANIBA",
    image: "../utils/albina.jpeg",
  },
  {
    text: "CAL",
    random: "ALC",
    image: "../utils/horse.png",
  },
  {
    text: "NOR",
    random: "RON",
    image: "../utils/cloud2.png",
  },
  {
    text: "OMIDA",
    random: "MIODA",
    image: "../utils/catterpilar.png",
  },
  {
    text: "ELEFANT",
    random: "EFANELT",
    image: "../utils/elephant.png",
  },
  {
    text: "FLORI",
    random: "LIFOR",
    image: "../utils/flowers.png",
  },
  {
    text: "INIMA",
    random: "MINAI",
    image: "../utils/heart.png",
  },
  {
    text: "LUNA",
    random: "NALU",
    image: "../utils/moon.png",
  },
  {
    text: "MUNTE",
    random: "TENUM",
    image: "../utils/mountain.png",
  },
  {
    text: "AVION",
    random: "NOVAI",
    image: "../utils/plane.png",
  },
  {
    text: "STELE",
    random: "TELSE",
    image: "../utils/stars.jpg",
  },
];

let position = 0;

let backButton = document.querySelector("[data-back]");
let fowardButton = document.querySelector("[data-foward]");

backButton.addEventListener("click", () => {
  if (position >= 0 && position <= words.length - 1) {
    position--;

    if (position === -1) {
      position = 0;
    }

    buildTable(words[position]);
  }
});

fowardButton.addEventListener("click", () => {
  if (position >= 0 && position <= words.length - 1) {
    position++;

    if (position === words.length) {
      position = words.length - 1;
    }

    buildTable(words[position]);
  }
});

function buildTable(word) {
  const anagramSection = document.querySelector(".anagram");
  const anagramLettersSection = document.querySelector(".anagram-letters");

  anagramSection.innerHTML = "";
  anagramLettersSection.innerHTML = "";

  // Add The Word
  const anagramTextElement = document.createElement("span");
  anagramTextElement.classList.add("word");
  anagramTextElement.textContent = word["text"];
  anagramSection.appendChild(anagramTextElement);

  // Add the iamge
  const anagramImageElement = document.createElement("img");
  anagramImageElement.width = 220;
  anagramImageElement.height = 200;
  anagramImageElement.alt = word["text"];
  anagramImageElement.src = word["image"];
  anagramSection.appendChild(anagramImageElement);

  // Add the letters
  for (let i = 0; i < word["random"].length; i++) {
    const anagramLetterElement = document.createElement("span");
    anagramLetterElement.classList.add("letter");
    anagramLetterElement.textContent = word["random"].charAt(i);
    anagramLettersSection.appendChild(anagramLetterElement);
  }
}

buildTable(words[0]);
