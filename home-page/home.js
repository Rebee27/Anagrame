const home = document.getElementById("home-bttn");
const lessons = document.getElementById("misters-bttn");
const anagrams = document.getElementById("anagrams-bttn");

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

function setPointer() {
    home.style.cursor = "pointer";
    anagrams.style.cursor = "pointer";
    lessons.style.cursor = "pointer";
}
setPointer();