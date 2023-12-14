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

let gameOver = false;

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
    image: "../utils/albina.jpg",
    score: 11,
  },
  {
    text: "ELEFANT",
    random: "EFANELT",
    image: "../utils/elefant.jpg",
    score: 16,
  },
];

let position = 0;
let isGameOver = false;
let totalScore = 0;

const closeButton = document.querySelector("dialog button");
const dialogText = document.querySelector("dialog p");

const checkWord = () => {
  let correct = true;

  const listOfLetterrs = document.querySelector(".anagram-letters");
  if (position < words.length) {
    for (let i = 0; i < listOfLetterrs.children.length; i++) {
      if (
        listOfLetterrs.children[i].textContent !==
        words[position]["text"].charAt(i)
      ) {
        correct = false;
      }
    }
  } else {
    correct = true;
  }

  if (correct === true) {
    position++;
    if (position < words.length) {
      const score = document.querySelector(".score");
      totalScore += words[position - 1]["score"];
      score.textContent = `SCOR: ${totalScore}`;
      alert("Cuvant corect!! Poti trece la urmatorul cuvant!!");
      buildTable(words[position]);
    } else if (position === words.length) {
      if (!gameOver) {
        const score = document.querySelector(".score");
        totalScore += words[position - 1]["score"];
        score.textContent = `SCOR: ${totalScore}`;
        gameOver = true;
      }
      alert("Cuvant Corect!! Sfarsitul jocului...");

      position--;
    }
  } else {
    alert("Cuvant gresit... Incearca din nou!!");
  }
};

const verifyButton = document.querySelector(".verify-button");

verifyButton.addEventListener("click", checkWord);

buildTable(words[position]);

function buildTable(word) {
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
    anagramLetterElement.draggable = true;
    anagramLettersSection.appendChild(anagramLetterElement);
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
