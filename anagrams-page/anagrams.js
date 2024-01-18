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
    window.location.href = "../index.html";
  });
}
goToHome();

function goToLogo() {
  logo.addEventListener("click", () => {
    window.location.href = "../index.html";
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
    text: "IARBA",
    random: "BRAAI",
    image: "../utils/iarba.jpg",
    score: 9,
  },
  {
    text: "STELE",
    random: "ELSTE",
    image: "../utils/stele.jpg",
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
    text: "MORCOV",
    random: "ROCOVM",
    image: "../utils/morcov.jpg",
    score: 9,
  },
  {
    text: "INIMA",
    random: "MINAI",
    image: "../utils/inima.jpg",
    score: 9,
  },
  {
    text: "PORUMB",
    random: "UROPMB",
    image: "../utils/porumb.jpg",
    score: 11,
  },
  {
    text: "FRUCTE",
    random: "UCTFRE",
    image: "../utils/fructe.jpg",
    score: 11,
  },
  {
    text: "DOVLEAC",
    random: "DOVLECA",
    image: "../utils/dovleac.jpg",
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
      playCorrectAnimation(() => {
        buildTable(words[position]);
      });
    } else if (position === words.length) {
      if (!gameOver) {
        const score = document.querySelector(".score");
        totalScore += words[position - 1]["score"];
        score.textContent = `SCOR: ${totalScore}`;
        gameOver = true;
        localStorage.setItem("correct", "true");
        localStorage.setItem("gameOver", "true");
        localStorage.setItem("wordIndex", `${position - 1}`);
        localStorage.setItem("score", `${100}`);
      }
      // Display mesage for endgame
      displayAllImages();
    }
  } else {
    playWrongAnimation();
    wrongWordAudioElement.play();
  }
}

function playCorrectAnimation(callback) {
  const animationContainer = document.querySelector(".animation-container");
  animationContainer.innerHTML = ""; // Clear previous content

  // Create and append your animation element (like or smiley face)
  const animationElement = document.createElement("div");
  animationElement.classList.add("correct-animation");

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

function playWrongAnimation(callback) {
  const animationContainer = document.querySelector(".animation-container");
  animationContainer.innerHTML = ""; // Clear previous content

  // Create and append your animation element (like or smiley face)
  const animationElement = document.createElement("div");
  animationElement.classList.add("wrong-animation");

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

const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", () => {
  localStorage.setItem("gameOver", "false");
  localStorage.setItem("score", "0");
  localStorage.setItem("wordIndex", "0");
  localStorage.setItem("correct", "false");

  restartAudioElement = document.createElement("audio");
  restartAudioElement.src = "../utils/sounds/restart.mp3";
  restartAudioElement.play();

  setTimeout(() => {
    window.location.reload();
  }, 3000);
});

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

// Get the info icon and the modal
var infoIcon = document.querySelector("#infoBtn");
var infoModal = document.querySelector("#infoModal");
var bodyElement = document.body;

// Get the close button inside the modal
var closeBtn = document.querySelector(".close");
const audioElement = document.createElement("audio");

// When the user clicks the info icon, open the modal
infoIcon.addEventListener("click", () => {
  infoModal.style.display = "block";
  audioElement.src = "../utils/sounds/info_anagrame.mp3";
  audioElement.play();
});

// When the user clicks the close button, close the modal
closeBtn.addEventListener("click", function () {
  infoModal.style.display = "none";
  stopAudio();
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function () {
  if (event.target == infoModal) {
    infoModal.style.display = "none";
    bodyElement.classList.remove("blur");
    stopAudio();
  }
});

function stopAudio() {
  audioElement.pause();
  audioElement.currentTime = 0;
}

function restartGame() {
  // Reset game state in localStorage
  localStorage.setItem("gameOver", "false");
  localStorage.setItem("score", "0");
  localStorage.setItem("wordIndex", "0");
  localStorage.setItem("correct", "false");

  // Reload the page after a delay
  restartAudioElement = document.createElement("audio");
  restartAudioElement.src = "../utils/sounds/restart.mp3";
  restartAudioElement.play();

  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

function displayAllImages() {
  const endGameContainer = document.querySelector(".end-game-container");

  // Audio
  const audioElement = document.createElement("audio");
  audioElement.src = "../utils/sounds/endgame.mp3";
  audioElement.play();

  // Set the number of columns in the grid
  const numColumns = 3; // You can adjust this based on your preference

  // Calculate the number of rows based on the total number of images and columns
  const numRows = Math.ceil(words.length / numColumns);

  // Iterate through the words array
  for (let row = 0; row < numRows; row++) {
    // Create a row element for each iteration
    const rowElement = document.createElement("div");
    rowElement.classList.add("end-game-row");

    // Iterate through each column in the row
    for (let col = 0; col < numColumns; col++) {
      const index = row * numColumns + col;

      // Check if there are still images left
      if (index < words.length) {
        // Create image element
        const endGameImageElement = document.createElement("img");
        endGameImageElement.width = 100; // Set the desired width
        endGameImageElement.height = 100; // Set the desired height
        endGameImageElement.alt = words[index]["text"];
        endGameImageElement.src = words[index]["image"];

        const wordAudioElement = document.createElement("audio");
        wordAudioElement.src = `../utils/sounds/${words[index][
          "text"
        ].toLowerCase()}.mp3`;

        endGameImageElement.addEventListener("mouseover", () => {
          wordAudioElement.play();
        });

        // Append the image element to the row
        rowElement.appendChild(endGameImageElement);
      }
    }

    // Append the row to the container
    endGameContainer.appendChild(rowElement);
  }

  // Show the end game container
  endGameContainer.style.display = "grid";

  const closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", function () {
    restartGame();
    backgroundAudio.pause();
  });
}
