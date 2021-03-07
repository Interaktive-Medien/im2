// Selektiere das Audio-Element und der Button
let audio = document.querySelector('#yeah-audio');
let button = document.querySelector('#play-button');

// Füge einen Event-Listener hinzu, welcher auf den 'click'-Event hört
button.addEventListener('click', playButton)

// Definiere eine Funktion, welche beim Button-Klick ausgeführt wird
function playButton() {
    // Überprüfe, ob die Audio-Datei pausiert ist (pausiert == true)
    if (audio.paused) {
        // Audio ist pausiert, also Play
        audio.play();
        // Text des Buttons wechseln
        button.innerHTML = 'Pause';
    } else {
        // Audio ist am Abspielen, also Pause
        audio.pause();
        // Texts des Buttons wechseln
        button.innerHTML = 'Play';
    }
}
