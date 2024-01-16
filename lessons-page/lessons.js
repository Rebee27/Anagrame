const home = document.getElementById("home-bttn");
const lessons = document.getElementById("misters-bttn");
const anagrams = document.getElementById("anagrams-bttn");
const soundIcon = document.getElementById("soundIcon");
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
    window.location.href = "index.html";
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

const words = [
  {
    litera: "A",
    image1: "../utils/casa.png",
    image2: "../utils/cal.jpg",
    image3: "../utils/balon.jpg",
    text1: "C A - S A",
    text2: "C A L",
    text3: "A - R I C I",
  },
  {
    litera: "E",
    image1: "../utils/munte.jpg",
    image2: "../utils/stele.jpg",
    image3: "../utils/pasare.jpg",
    text1: "M U N - T E",
    text2: "S T E - L E",
    text3: "P A - S Ă - R E",
  },
  {
    litera: "I",
    image1: "../utils/inima.jpg",
    image2: "../utils/iarba.jpg",
    image3: "../utils/flori.jpg",
    text1: "I - N I - M A",
    text2: "I A R - B A",
    text3: "F L O R I",
  },
  {
    litera: "O",
    image1: "../utils/omida.jpg",
    image2: "../utils/morcov.jpg",
    image3: "../utils/porumb.png",
    text1: "O - M I - D A",
    text2: "M O R - C O V",
    text3: "P O - R U M B",
  },
  {
    litera: "U",
    image1: "../utils/urs.jpg",
    image2: "../utils/bunica.jpg",
    image3: "../utils/curcubeu.png",
    text1: "U - Ș A",
    text2: "B U - N I - C A",
    text3: "C U R - C U - B E U",
  },
  {
    litera: "C",
    image1: "../utils/carte.jpg",
    image2: "../utils/parc.jpg",
    image3: "../utils/caine.jpg",
    text1: "C O - C O Ș",
    text2: "P A R C",
    text3: "C Â I - N E",
  },
  {
    litera: "M",
    image1: "../utils/melc.jpg",
    image2: "../utils/urma.jpg",
    image3: "../utils/pom.jpg",
    text1: "M E L C",
    text2: "U R M A",
    text3: "P O M",
  },
  {
    litera: "N",
    image1: "../utils/nor.jpg",
    image2: "../utils/cana.jpg",
    image3: "../utils/randunica.jpg",
    text1: "N O R",
    text2: "C A - N A",
    text3: "R Â N - D U - N I - C Ă",
  },
  {
    litera: "R",
    image1: "../utils/radiera.jpg",
    image2: "../utils/flori.jpg",
    image3: "../utils/rata.jpg",
    text1: "M Ă R",
    text2: "F L O A - R E",
    text3: "R A - Ț Ă",
  },
  {
    litera: "L",
    image1: "../utils/lupa.jpg",
    image2: "../utils/alune.jpg",
    image3: "../utils/far.jpg",
    text1: "L A - L E A",
    text2: "A - L U - N E",
    text3: "F A - R U L",
  },
  {
    litera: "D",
    image1: "../utils/dovleac.jpg",
    image2: "../utils/medic.jpg",
    image3: "../utils/gard.jpg",
    text1: "D O - V L E A C",
    text2: "M E - D I C",
    text3: "G A R D",
  },
  {
    litera: "F",
    image1: "../utils/fructe.jpg",
    image2: "../utils/afine.jpg",
    image3: "../utils/pantof.jpg",
    text1: "F R U C - T E",
    text2: "A - F I - N E",
    text3: "F U R - N I - C A",
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
  const letter = document.querySelector(".letter");
  const img1 = document.querySelector(".image1");
  const img2 = document.querySelector(".image2");
  const img3 = document.querySelector(".image3");
  const word1 = document.querySelector(".word1");
  const word2 = document.querySelector(".word2");
  const word3 = document.querySelector(".word3");

  letter.innerHTML = "";
  img1.innerHTML = "";
  img2.innerHTML = "";
  img3.innerHTML = "";
  word1.innerHTML = "";
  word2.innerHTML = "";
  word3.innerHTML = "";

  // Add The Letter
  const misterulLiterei = document.createElement("div");
  misterulLiterei.classList.add("misterul-literei");
  misterulLiterei.textContent = "MISTERUL LITEREI:";
  letter.appendChild(misterulLiterei);

  // Add the Letter below "Misterul Literei"
  const letterElement = document.createElement("span");
  letterElement.classList.add("letter");
  letterElement.textContent = word["litera"];
  letter.appendChild(letterElement);
  
  // Add "Misterele bunicii" above the photos
  const mistereleBunicii = document.createElement("div");
  const mistereleBunicii2 = document.createElement("div");
  mistereleBunicii.classList.add("misterele-bunicii");
  mistereleBunicii.textContent = "MISTERELE DIN GRADINA BUNICII:";
  mistereleBunicii2.classList.add("misterele-bunicii2");
  mistereleBunicii2.textContent = "";
  img1.appendChild(mistereleBunicii);
  img2.appendChild(mistereleBunicii2);
  img3.appendChild(mistereleBunicii2);

  // Add the Image1
  const imgElement1 = document.createElement("img");
  imgElement1.width = 200;
  imgElement1.height = 200;
  imgElement1.alt = word["text1"];
  imgElement1.src = word["image1"];
  const audioElement1 = document.createElement("audio");
  audioElement1.src = `../utils/sounds/${word["litera"]}_image1.mp3`;
  imgElement1.appendChild(audioElement1);
  imgElement1.addEventListener("mouseover", () => {
    audioElement1.play();
  });
  document.querySelector(".image1").appendChild(imgElement1);

  // Add the Image2
  const imgElement2 = document.createElement("img");
  imgElement2.width = 200;
  imgElement2.height = 200;
  imgElement2.alt = word["text2"];
  imgElement2.src = word["image2"];
  const audioElement2 = document.createElement("audio");
  audioElement2.src = `../utils/sounds/${word["litera"]}_image2.mp3`;
  imgElement2.appendChild(audioElement2);
  imgElement2.addEventListener("mouseover", () => {
    audioElement2.play();
  });
  document.querySelector(".image2").appendChild(imgElement2);

  // Add the Image3
  const imgElement3 = document.createElement("img");
  imgElement3.width = 200;
  imgElement3.height = 200;
  imgElement3.alt = word["text3"];
  imgElement3.src = word["image3"];
  const audioElement3 = document.createElement("audio");
  audioElement3.src = `../utils/sounds/${word["litera"]}_image3.mp3`;
  imgElement3.appendChild(audioElement3);
  imgElement3.addEventListener("mouseover", () => {
    audioElement3.play();
  });
  document.querySelector(".image3").appendChild(imgElement3);

  // Add the Word1
  const wordElement1 = document.createElement("p");
  wordElement1.classList.add("word1");
  wordElement1.textContent = word["text1"];
  word1.appendChild(wordElement1);

  // Add the Word2
  const wordElement2 = document.createElement("p");
  wordElement2.classList.add("word2");
  wordElement2.textContent = word["text2"];
  word2.appendChild(wordElement2);

  // Add the Word3
  const wordElement3 = document.createElement("p");
  wordElement3.classList.add("word3");
  wordElement3.textContent = word["text3"];
  word3.appendChild(wordElement3);

  word1.innerHTML = colorizeLetter(word["text1"], word["litera"]);
  word2.innerHTML = colorizeLetter(word["text2"], word["litera"]);
  word3.innerHTML = colorizeLetter(word["text3"], word["litera"]);
}

function colorizeLetter(text, targetLetter) {
  return text
    .split("")
    .map((char) => {
      return char === targetLetter
        ? `<span class="colored-letter">${char}</span>`
        : char;
    })
    .join("");
}

buildTable(words[0]);

const letterAudioElement = document.createElement("audio");

soundIcon.addEventListener("mouseover", () => {
  // Replace "A.mp3" with the appropriate audio file based on the current letter
  letterAudioElement.src = `../utils/sounds/${words[position].litera}.mp3`;
  letterAudioElement.play();
});


// Get the info icon and the modal
var infoIcon = document.getElementById("info");
var infoModal = document.getElementById("infoModal");
var bodyElement = document.body;
const audioElement = document.createElement("audio");

// Get the close button inside the modal
var closeBtn = document.querySelector(".close");

// When the user clicks the info icon, open the modal
infoIcon.onclick = function () {
  infoModal.style.display = "block";
  audioElement.src = "../utils/sounds/info-litere.mp3";
  audioElement.play();
};

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
