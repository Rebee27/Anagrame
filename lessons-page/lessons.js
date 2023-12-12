const home = document.getElementById("home-bttn");
const lessons = document.getElementById("misters-bttn");
const anagrams = document.getElementById("anagrams-bttn");
const soundIcon = document.getElementById("soundIcon"); 

function goToLessons() {
    lessons.addEventListener("click", () => {
        window.location.href = "../lessons-page/lessons.html"
    })
};
goToLessons();

function gotToAnagrams() {
    anagrams.addEventListener("click", () => {
        window.location.href = "../anagrams-page/anagrams.html"
    })
};
gotToAnagrams();

function goToHome() {
    home.addEventListener("click", () => {
        window.location.href = "../home-page/home.html"
    })
};
goToHome();

function setPointer() {
    home.style.cursor = "pointer";
    anagrams.style.cursor = "pointer";
    lessons.style.cursor = "pointer";
}
setPointer();




const words = [
    {
        litera: "A",
        image1: "../utils/avion.jpg",
        image2: "../utils/cal.jpg",
        image3: "../utils/luna.jpg",
        text1: "A - V I - O N",
        text2: "C A L",
        text3: "L U - N A",
    },
    {
        litera: "E",
        image1: "../utils/munte.jpg",
        image2: "../utils/stele.jpg",
        image3: "../utils/elefant.jpg",
        text1: "M U N - T E",
        text2: "S T E - L E",
        text3: "E - L E - F A N T",
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
        image2: "../utils/joc.jpg",
        image3: "../utils/maro.jpg",
        text1: "O - M I - D A",
        text2: "J O C",
        text3: "M A - R O",
    },
    {
        litera: "U",
        image1: "../utils/urs.jpg",
        image2: "../utils/bunica.jpg",
        image3: "../utils/unu.jpg",
        text1: "U R S",
        text2: "B U - N I - C A",
        text3: "U N U",
    },
    {
        litera: "C",
        image1: "../utils/carte.jpg",
        image2: "../utils/parc.jpg",
        image3: "../utils/scut.jpg",
        text1: "C A R - T E",
        text2: "P A R C",
        text3: "S C U T",
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
        image3: "../utils/pian.jpg",
        text1: "N O R",
        text2: "C A - N A",
        text3: "P I - A N",
    },
    {
        litera: "R",
        image1: "../utils/radiera.jpg",
        image2: "../utils/flori.jpg",
        image3: "../utils/pictor.jpg",
        text1: "R A - D I - E - R A",
        text2: "F L O A - R E",
        text3: "P I C - T O R",
    },
    {
        litera: "L",
        image1: "../utils/lupa.jpg",
        image2: "../utils/alune.jpg",
        image3: "../utils/far.jpg",
        text1: "L U - P A",
        text2: "A - L U - N E",
        text3: "F A - R U L",
    },
    {
        litera: "D",
        image1: "../utils/delfin.jpg",
        image2: "../utils/medic.jpg",
        image3: "../utils/gard.jpg",
        text1: "D E L - F I N",
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
        text3: "P A N - T O F",
    }
]

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
    const letterElement = document.createElement("span");
    letterElement.classList.add("letter");
    letterElement.textContent = word["litera"];
    letter.appendChild(letterElement);


    // Add the Image1
    const imgElement1 = document.createElement("img");
    imgElement1.width = 200;
    imgElement1.height = 200;
    imgElement1.alt = word["text1"];
    imgElement1.src = word["image1"];
    img1.appendChild(imgElement1);

    // Add the Image2
    const imgElement2 = document.createElement("img");
    imgElement2.width = 200;
    imgElement2.height = 200;
    imgElement2.alt = word["text2"];
    imgElement2.src = word["image2"];
    img2.appendChild(imgElement2);


    // Add the Image3
    const imgElement3 = document.createElement("img");
    imgElement3.width = 200;
    imgElement3.height = 200;
    imgElement3.alt = word["text3"];
    imgElement3.src = word["image3"];
    img3.appendChild(imgElement3);


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


    // Add letter sound
    const soundIcon = document.getElementById("soundIcon"); // Get the sound icon element

    // Adding screen reader functionality for the letter "A" when clicking the sound icon
    soundIcon.addEventListener('click', () => {
        const letterA = document.getElementById('letter').textContent.trim();
        const speech = new SpeechSynthesisUtterance("Litera"+ letterA);

        // Set speech settings for Romanian
        speech.lang = 'ro-RO'; // Change language to Romanian

        // Set the rate (speed) of speech
        speech.rate = 0.7; // Adjust the rate as needed (0.1 is the slowest, 10 is the fastest)

        // Speak the letter "A" in Romanian
        window.speechSynthesis.speak(speech);
    });

}

function colorizeLetter(text, targetLetter) {
    return text.split('').map(char => {
        return char === targetLetter ? `<span class="colored-letter">${char}</span>` : char;
    }).join('');
}

buildTable(words[0]);


// Add letter reader
function setLetterReader() {
    const soundIcon = document.getElementById("soundIcon"); // Get the sound icon element

    // Adding screen reader functionality for the letter when clicking the sound icon
    soundIcon.addEventListener('click', () => {
        const letter = document.querySelector('.letter').textContent.trim();
        const speech = new SpeechSynthesisUtterance("Litera"+ letter);

        // Set speech settings for Romanian
        speech.lang = 'ro-RO'; // Change language to Romanian

        // Set the rate (speed) of speech
        speech.rate = 0.3; // Adjust the rate as needed (0.1 is the slowest, 10 is the fastest)

        // Speak the letter in Romanian
        window.speechSynthesis.speak(speech);
    });
}

setLetterReader();