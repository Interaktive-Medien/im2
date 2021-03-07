// Selektiere das Video-Element, der Button und die Statusbar
let video = document.querySelector('#action-movie-kid');
let statusbar = document.querySelector('#statusbar');

let playButton = document.querySelector('#play-button');
let stopButton = document.querySelector('#stop-button');
let muteButton = document.querySelector('#mute-button');

// Füge die Event-Listener hinzu, welche auf den 'click'-Event hören
playButton.addEventListener('click', eventPlayButton);
stopButton.addEventListener('click', eventStopButton);
muteButton.addEventListener('click', eventMuteButton);

function eventPlayButton() {
    // Überprüfe, ob das Video pausiert ist (pausiert == true)
    if (video.paused) {
        // Video ist pausiert, also Play
        video.play();
        // Text des Buttons wechseln
        playButton.innerHTML = 'Pause';
        // Statusbar einfügen
        statusbar.innerHTML = 'Video wird abgespielt';
    } else {
        // Video ist am Abspielen, also Pause
        video.pause();
        // Texts des Buttons wechseln
        playButton.innerHTML = 'Play';
        // Statusbar einfügen
        statusbar.innerHTML = 'Video ist pausiert';
    }
}

function eventStopButton() {
    // Das Video neu laden (setzt den Abspielzustand zurück)
    video.load();
    // Der Play-Button muss wider 'Play' heissen (auch wenn er das schon ist)
    playButton.innerHTML = 'Play';
    // Statusbar einfügen
    statusbar.innerHTML = 'Video ist gestoppt und zurückgesetzt';
}

function eventMuteButton() {
    if (video.muted) {
        // Das Video ist bereits lautlos, also wieder laut machen
        video.muted = false;
        // Der Button anpassen
        muteButton.innerHTML = "Lautlos";
        // Statusbar einfügen
        statusbar.innerHTML = 'Video ist auf laut';
    } else {
        // Das Video ist noch laut, also lautlos machen
        video.muted = true;
        // Der Button anpassen
        muteButton.innerHTML = "Video ist lautlos";
    }
}
