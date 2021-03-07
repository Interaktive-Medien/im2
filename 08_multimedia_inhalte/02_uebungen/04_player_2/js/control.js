// Selektiere das Video-Element, der Button und die Statusbar
let video = document.querySelector('#action-movie-kid');

let statusbar = document.querySelector('#statusbar');

let playButton = document.querySelector('#play-button');
let stopButton = document.querySelector('#stop-button');
let muteButton = document.querySelector('#mute-button');



/* ----------- VORHERIGE ÜBUNG ------------ */
/* -----------        v        ------------ */

// Füge die Event-Listener hinzu, welche auf den 'click'-Event hören
playButton.addEventListener('click', eventPlayButton)
function eventPlayButton() {
    // Überprüfe, ob das Video pausiert ist (pausiert == true)
    if (video.paused) {
        // Video ist pausiert, also Play
        video.play();
        // Text des Buttons wechseln
        playButton.innerHTML = 'Pause';
    } else {
        // Video ist am Abspielen, also Pause
        video.pause();
        // Texts des Buttons wechseln
        playButton.innerHTML = 'Play';
    }
}

// Füge die Event-Listener hinzu, welche auf den 'click'-Event hören
stopButton.addEventListener('click', eventStopButton)
function eventStopButton() {
    // Das Video neu laden (setzt den Abspielzustand zurück)
    video.load();
    // Der Play-Button muss wider 'Play' heissen (auch wenn er das schon ist)
    playButton.innerHTML = 'Play';
}

// Füge die Event-Listener hinzu, welche auf den 'click'-Event hören
muteButton.addEventListener('click', eventMuteButton)
function eventMuteButton() {
    if (video.muted) {
        // Das Video ist bereits lautlos, also wieder laut machen
        video.muted = false;
        // Der Button anpassen
        muteButton.innerHTML = "Lautlos";
    } else {
        // Das Video ist noch laut, also lautlos machen
        video.muted = true;
    }
}
