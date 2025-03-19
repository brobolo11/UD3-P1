document.addEventListener("DOMContentLoaded", function () {
    const audios = document.getElementsByClassName("myAudio");
    const buttons = document.getElementsByClassName("audioBtn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            
            // Pausar el audio que este sonando
            for (let j = 0; j < audios.length; j++) {
                if (j !== i) {
                    audios[j].pause();
                    audios[j].currentTime = 0; // Reiniciar audio
                    buttons[j].textContent = "Play";
                }
            }

            if (audios[i].paused) {
                audios[i].play();
                buttons[i].textContent = "Pause";
            } else {
                audios[i].pause();
                buttons[i].textContent = "Play";
            }
        });
    }
});