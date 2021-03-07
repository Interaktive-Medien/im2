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
    // Hindere JavaScript vor allen standardmässigen Befehlen
    paramEvent.preventDefault()

    // Verändere die Ansicht der Sections
    document.querySelector('#pomodoroTimer').style.display = 'block';
    document.querySelector('#pomodoroNeu').style.display = 'none';

    // Starte den Pomodoro und führe diese Funktion aus
    startePomodoro(25)
}

function startePomodoro(paraMin) {
    // Erstelle einen Timer mit 25 Minuten
    timer = new easytimer.Timer();
    timer.start({countdown: true, startValues: {seconds: 0, minutes: paraMin}});
    timer.on('secondsUpdated', timerTick);
    timer.on('targetAchieved', timerFinish);

    // Hole die Werte aus dem Formular und speichere sie global
    name = document.querySelector('#uebungName').value
    beschreibung = document.querySelector('#uebungBeschreibung').value
}

function timerTick() {
    
}

function timerFinish() {
    
}