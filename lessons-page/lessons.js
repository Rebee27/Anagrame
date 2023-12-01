const home = document.getElementById("home-bttn");
const lessons = document.getElementById("misters-bttn");
const anagrams = document.getElementById("anagrams-bttn");
const soundIcon = document.getElementById("soundIcon"); 

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
    soundIcon.style.cursor = "pointer"; // Add this line to set the cursor for the sound icon
}
setPointer();

function setLetterReader() {
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

setLetterReader();
