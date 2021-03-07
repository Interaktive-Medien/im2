// Selektiere das Video-Element, der Button und die Statusbar
let video = document.querySelector('#action-movie-kid');

let statusbar = document.querySelector('#statusbar');
let verbleibendeZeit = document.querySelector('#verbleibende-zeit');

let playButton = document.querySelector('#play-button');
let stopButton = document.querySelector('#stop-button');
let muteButton = document.querySelector('#mute-button');


// Registriere einen Event, der jedes mal wenn sich die Zeit des Videos aktualisiert, ausgeführt wird
video.addEventListener('timeupdate', eventZeitAktualisieren);
function eventZeitAktualisieren(e) {
    // hole die beiden Zeiten 'abgespielt' und 'total' des Videos
    let abgespielteZeit = Math.round(e.target.currentTime);
    let totaleZeit = Math.round(video.duration);

    // Schreibe das in das HTML-Element
    verbleibendeZeit.innerHTML = abgespielteZeit + 's/' + totaleZeit + 's';
}

// Registriere einen Event, der auf das Ende des Videos hört
video.addEventListener('ended', eventVideoEnde);
function eventVideoEnde() {
    // Schreibe das in das Statusbar HTML-Element
    statusbar.innerHTML = 'Das Video ist fertig.';
}

// Registriere einen Event, der auf das Pausieren hört
video.addEventListener('pause', eventVideoPaused);
function eventVideoPaused() {
    // Schreibe das in das Statusbar HTML-Element
    statusbar.innerHTML = 'Das Video ist pausiert.';
}


/* ----------- ZUSATZAUFGABEN ------------ */
// Registriere einen Event, der auf das Abspielen hört
video.addEventListener('play', eventVideoPlay);
function eventVideoPlay() {
    // Schreibe das in das Statusbar HTML-Element
    statusbar.innerHTML = 'Das Video wird abgespielt.';
}

// Registriere einen Event, der auf das vollständige Laden hört
video.addEventListener('loadeddata', eventLoadedData);
function eventLoadedData() {
    // Schreibe das in das Statusbar HTML-Element
    statusbar.innerHTML = 'Das Video ist geladen.';
}
/* ----------- ZUSATZAUFGABEN ENDE ------------ */


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
