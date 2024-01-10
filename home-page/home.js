const home = document.getElementById("home-bttn");
const lessons = document.getElementById("misters-bttn");
const anagrams = document.getElementById("anagrams-bttn");
const nextPage = document.getElementById("next-page-bttn");
const logo = document.getElementById("logo");

function goToLessons() {
    lessons.addEventListener("click", () => {
        window.location.href = "lessons-page/lessons.html"
    })
};
goToLessons();

function gotToAnagrams() {
    anagrams.addEventListener("click", () => {
        window.location.href = "anagrams-page/anagrams.html"
    })
};
gotToAnagrams();

function goToHome() {
    home.addEventListener("click", () => {
        window.location.href = "index.html"
    })
};
goToHome();

function goToLessons2() {
    nextPage.addEventListener("click", () => {
        window.location.href = "lessons-page/lessons.html"
    })
};
goToLessons2();

function goToLogo() {
    logo.addEventListener("click", () => {
        window.location.href = "index.html"
    })
};
goToLogo();

function setPointer() {
    home.style.cursor = "pointer";
    anagrams.style.cursor = "pointer";
    lessons.style.cursor = "pointer";
    nextPage.style.cursor = "pointer";
    logo.style.cursor = "pointer";
}
setPointer();


// Create a single audio element for the sound icon
const soundIconAudio = document.createElement("audio");
soundIcon.appendChild(soundIconAudio);  // Append the audio element to the sound icon

// Adding screen reader functionality for the letter when clicking the sound icon
soundIcon.addEventListener('mouseover', () => {
    soundIconAudio.src = "utils/sounds/bun-venit.mp3";
    soundIconAudio.play();
});

const button = document.getElementById("next-page-bttn");

// Adding screen reader functionality for the letter when clicking the sound icon
button.addEventListener('mouseover', () => {
    soundIconAudio.src = "utils/sounds/aventura.mp3";
    soundIconAudio.play();
});