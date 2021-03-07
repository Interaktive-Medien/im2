// Selektiere das Video-Element und der Button
let video = document.querySelector('#action-movie-kid');
let button = document.querySelector('#play-button');

// Füge einen Event-Listener hinzu, welcher auf den 'click'-Event hört
button.addEventListener('click', playButton)

// Definiere eine Funktion, welche beim Button-Klick ausgeführt wird
function playButton() {
    // Überprüfe, ob das Video pausiert ist (pausiert == true)
    if (video.paused) {
        // Video ist pausiert, also Play
        video.play();
        // Text des Buttons wechseln
        button.innerHTML = 'Pause';
    } else {
        // Video ist am Abspielen, also Pause
        video.pause();
        // Texts des Buttons wechseln
        button.innerHTML = 'Play';
    }
}
