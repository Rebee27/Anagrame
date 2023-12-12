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
let isGameOver = false;

const checkWord = () => {
  let correct = true;

  const listOfLetterrs = document.querySelector(".anagram-letters");
  for (let i = 0; i < listOfLetterrs.children.length; i++) {
    if (
      listOfLetterrs.children[i].textContent !==
      words[position]["text"].charAt(i)
    ) {
      correct = false;
    }
  }
  if (correct === true) {
    console.log("Cuvant corect!!");
    position++;
    if (position < words.length) {
      buildTable(words[position]);
    } else {
      console.log("End of the game...");
    }
  } else {
    console.log("Cuvant gresit!!");
  }
};

const verifyButton = document.querySelector(".verify-button");
verifyButton.addEventListener("click", checkWord);

buildTable(words[position]);

// let backButton = document.querySelector("[data-back]");
// let fowardButton = document.querySelector("[data-foward]");

// backButton.addEventListener("click", () => {
//   if (position >= 0 && position <= words.length - 1) {
//     position--;

//     if (position === -1) {
//       position = 0;
//     }

//     buildTable(words[position]);
//   }
// });

// fowardButton.addEventListener("click", () => {
//   if (position >= 0 && position <= words.length - 1) {
//     position++;

//     if (position === words.length) {
//       position = words.length - 1;
//     }

//     buildTable(words[position]);
//   }
// });

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
