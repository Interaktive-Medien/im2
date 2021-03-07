// Selektiere das Video-Element und die Paragraphen
let video = document.querySelector('#action-movie-kid');
let verbleibendeZeit = document.querySelector('#verbleibende-zeit');
let statusbar = document.querySelector('#statusbar');

// Registriere einen Event, der jedes Mal wenn sich die Zeit des Videos aktualisiert, ausgeführt wird
video.addEventListener('timeupdate', zeitAktualisieren);
function zeitAktualisieren(e) {
    // Hole die beiden Zeiten 'abgespielt' und 'total' des Videos; runde
    let abgespielteZeit = Math.round(e.target.currentTime);

    // Schreibe das in das HTML-Element
    verbleibendeZeit.innerHTML = abgespielteZeit + 's';
}

// Registriere einen Event, der auf das Ende des Videos hört
video.addEventListener('ended', videoEnde);
function videoEnde() {
    // Schreibe das in das Statusbar-Element
    statusbar.innerHTML = 'Das Video ist fertig.';
}

// Registriere einen Event, der auf das Pausieren hört
video.addEventListener('pause', videoPaused);
function videoPaused() {
    // Schreibe das in das Statusbar-Element
    statusbar.innerHTML = 'Das Video ist pausiert.';
}

// Registriere einen Event, der auf das Abspielen hört
video.addEventListener('play', videoPlay);
function videoPlay() {
    // Schreibe das in das Statusbar-Element
    statusbar.innerHTML = 'Das Video wird abgespielt.';
}
