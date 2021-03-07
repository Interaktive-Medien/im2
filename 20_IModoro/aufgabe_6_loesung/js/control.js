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
    // Leere die komplette Liste
    document.querySelector("#pomodoroListe").innerHTML = '';

    // Hole alle Einträge aus dem localStorage 'pomodoro' und wandle sie zu einem Array um
    let pomodoroSammlung = JSON.parse(localStorage.getItem('pomodoro'));
    
    // Loope durch alle Einträge mit einer For-Schleife
    for (pomodoro in pomodoroSammlung) {

        // Rufe die Funktion "erstelleListeEintrag" auf und übergebe ihr das Pomodoro-Objekt
        erstelleListenEintrag(pomodoroSammlung[pomodoro]);
    }
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

function erstelleListenEintrag(paraPomodoroObjekt) {

    // Selektiere das Listenfeld
    let liste = document.querySelector("#pomodoroListe");
    
    // Erstelle einen neuen Artikel (ein Artikel ist bei uns einen Pomodoro in der Liste)
    let eintrag = document.createElement('article');
    
    // Erstelle den Titel mit einem 'h4'-Element
    let eintragTitel = document.createElement('h4');
    eintragTitel.innerText = paraPomodoroObjekt.name; // Gib dem Titel den Titel-Text, welcher übergeben wurde
    eintrag.appendChild(eintragTitel); // Füge den Titel zum Artikel hinzu
    
    // Erstelle den Untertitel als Paragraph
    let eintragBemerkung = document.createElement('p');
    let eintragBemerkungText = paraPomodoroObjekt.beschr; // Text des Paragraphen

    // Füge einen Text hinten an, je nach dem ob der Pomodor fertig gemacht wurde
    if (paraPomodoroObjekt.fertig) {
        eintragBemerkungText += " | fertig";
    } else {
        eintragBemerkungText += " | abgebrochen";
    }
    eintragBemerkung.innerText = eintragBemerkungText;
    eintrag.appendChild(eintragBemerkung); // Füge die Bemerkung zum Artikel hinzu
    
    // Element in der Liste am Schluss einfügen
    liste.appendChild(eintrag); 
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
    // Verändere den Zeit-Text zur aktuellen Zeit
    document.querySelector('.timer__zeit').innerHTML = timer.getTimeValues().minutes + ":" + timer.getTimeValues().seconds;
    
    // Verändere den Balken (im Minutentakt)
    let prozentFortschritt = 100 / 25 * timer.getTimeValues().minutes; // Prozent in Miuten ausrechnen
    prozentFortschritt = 100 - prozentFortschritt; // Prozentzahl umkehren
    document.querySelector('#pomoBalken').style.width = prozentFortschritt + "%"; // Auf Balken anwenden
}

function timerFinish() {
    // Pomodoro speichern (true, weil der Pomodoro erfolgreich beendet wurde)
    pomodoroEintragen(true);

    // Titel verändern
    document.querySelector('.timer__zeit').innerHTML = 'Fertig!';
    
    // Player konfigurieren
    let audioObject = document.querySelector('#audioPlayer'); // Hole den Audio-Tag
    audioObject.play(); // Starte Sound
    audioObject.onended = function() { // Füge eine Funktion zu einem Event hinzu
        location.reload();
    };
}

function pomodoroEintragen(paramComplete) {
    // Zeit und localStorage-Sammlung in Variablen speichern
    let zeitInSekunden = Date.now();
    let pomodoroSammlung = JSON.parse(localStorage.getItem('pomodoro'));

    // Überprüfen, ob das Array schon einen Eintrag hat. Ansonsten ein leeres Array erstellen
    if (pomodoroSammlung == undefined) {
        pomodoroSammlung = [];
    }
    // Pomodoro-Objekt erstellen
    let neuerEintragObjekt = {
        name: name,
        beschr: beschreibung,
        zeitstempel: zeitInSekunden,
        fertig: paramComplete
    };

    // Füge den neuen Pomodoro dem localStorage-Array an
    pomodoroSammlung.push(neuerEintragObjekt);

    // Speichere das die ganze Sammlung wieder im localStorage
    localStorage.setItem('pomodoro', JSON.stringify(pomodoroSammlung));
}