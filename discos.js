const audio = document.getElementById('myAudio');
const btn = document.getElementById('audioBtn');

btn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        btn.textContent = 'Pause';
    } else {
        audio.pause();
        btn.textContent = 'Play';
    }
});