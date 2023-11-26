const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playLetterSound(letter) {
    const frequency = letter.charCodeAt(0) * 10;

    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    oscillator.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
}

const soundButton = document.getElementById('soundButton');

soundButton.addEventListener('click', () => {
    // Play the sound within the existing audio context
    playLetterSound('A');
});