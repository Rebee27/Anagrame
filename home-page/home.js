const home = document.getElementById("home-bttn");
const lessons = document.getElementById("misters-bttn");
const anagrams = document.getElementById("anagrams-bttn");
const nextPage = document.getElementById("next-page-bttn");
const logo = document.getElementById("logo");

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
        window.location.href = "./home.html"
    })
};
goToHome();

function goToLessons2() {
    nextPage.addEventListener("click", () => {
        window.location.href = "../lessons-page/lessons.html"
    })
};
goToLessons2();

function goToLogo() {
    logo.addEventListener("click", () => {
        window.location.href = "../home-page/home.html"
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

function setReader() {
    const soundIcon = document.getElementById("soundIcon"); // Get the sound icon element

    // Adding screen reader functionality for the letter when clicking the sound icon
    soundIcon.addEventListener('click', () => {
        const text = document.getElementById("cloud").textContent;
        const speech = new SpeechSynthesisUtterance(text);

        // Set speech settings for Romanian
        speech.lang = 'ro-RO'; // Change language to Romanian

        // Set the rate (speed) of speech
        speech.rate = 0.3; // Adjust the rate as needed (0.1 is the slowest, 10 is the fastest)

        speech.pitch = 1;

        // Speak the letter in Romanian
        window.speechSynthesis.speak(speech);
    });
}
setReader();

function setReader2() {
    const button = document.getElementById("next-page-bttn"); 

    // Adding screen reader functionality for the letter when clicking the sound icon
    button.addEventListener('mouseover', () => {
        const text = document.getElementById("next-page-bttn").textContent;
        const speech = new SpeechSynthesisUtterance(text);

        // Set speech settings for Romanian
        speech.lang = 'ro-RO'; // Change language to Romanian

        // Set the rate (speed) of speech
        speech.rate = 0.3; // Adjust the rate as needed (0.1 is the slowest, 10 is the fastest)

        speech.pitch = 1;

        // Speak the letter in Romanian
        window.speechSynthesis.speak(speech);
    });
}
setReader2();