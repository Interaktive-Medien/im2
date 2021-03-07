// **********************
// *      index         *
// **********************

// Wenn das Dokument geladen wurde, führe die Funktion 'loadFunc' aus
document.addEventListener('DOMContentLoaded', loadFunc);

// Globale Variablen
let timer;
let name;
let beschreibung;

// Führe aus, sobald die Webseite fertig gealden hat
function loadFunc() {
    // Blende den Timer aus, da noch keiner gestartet wurde
    document.querySelector('#pomodoroTimer').style.display = 'none'

    // Füge den Eventlistener zu, welcher auf das Formular hört
    let formular = document.querySelector('#pomodoroNeuFormular');
    formular.addEventListener('submit', neuerPomodoroStarten);

    // Erstelle die Liste mit allen vergangenen Pomodoros
    erstelleListe()
}

function erstelleListe() {
    
}

function neuerPomodoroStarten(paramEvent) {

}