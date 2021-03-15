// Die Funktion in diesem Eventlistener wird ausgeführt,
// sobald alle Inhalte des DOM geladen wurden.
document.addEventListener("DOMContentLoaded", function(event) {

  // Speichern der HTML-Selektoren in Variablen,
  // da wir diese oft einsetzen werden.
  var inputVon = document.querySelector('#input-von');
  var inputNach = document.querySelector('#input-nach');
  let buttonSubmit = document.querySelector('#button-submit');
  let buttonLoeschen = document.querySelector('#button-loeschen');

  // Eventlistener aufs Input-Event im Feld #input-von
  // Das Event 'input' wird bei jedem Tastenschlag ausgelöst
  inputVon.addEventListener('input', function (evt) {

    // den Wert von #input-von in einer Variable speichern
    let meinInput = inputVon.value;

    // die Funktion aufrufen, in der wir die Abfrage an die API schicken
    // damit in dieser Funktion auf den User-Input zugegriffen werden kann,
    // muss dieser als Parameter übergeben werden.
    fetchStationenVon(meinInput);

  });

  // Eventlistener aufs Input-Event im Feld #input-nach
  // Das Event 'input' wird bei jedem Tastenschlag ausgelöst
  inputNach.addEventListener('input', function (evt) {

    // den Wert von #input-nach in einer Variable speichern
    let meinInput = inputNach.value;

    // die Funktion aufrufen, in der wir die Abfrage an die API schicken
    // damit in dieser Funktion auf den User-Input zugegriffen werden kann,
    // muss dieser als Parameter übergeben werden.
    fetchStationenNach(meinInput);

  });

  // Eventlistener auf den Button "VERBINDUNG SUCHEN"
  // Das Event 'click' wird beim Klick auf den Button ausgelöst
  buttonSubmit.addEventListener('click', function (evt) {

    // die Werte der Inputfelder in lokalen Variablen speichern
    let von = inputVon.value;
    let nach = inputNach.value;

    // prüfen, dass die Inputfelder nicht leer sind.
    if (von !== '' && nach !== ''){

      // falls die Input-Felder nicht leer sind, Ausgabe in der Konsole
      console.log("Der Submit-Button wurde gedrückt!");

      // den Query für die API aus den lokalen Variablen zusammensetzen
      // so kann der ganze String an die Funktion fetchVerbindungen
      // übergeben werden.
      let query = "from='" + von + "'&to='" + nach + "'";

      // prüfen, ob der Query korrekt zusammengesetzt wurde.
      // als Vorlage brauchen wir die Querys in der Dokumentation der API
      console.log(query);

      // den zusammengesetzten Query an die Funktion übergeben.
      fetchVerbindungen(query);

    } else {

      //falls die Inputfelder leer sind, Fehlermeldung in der Konsole ausgeben
      console.log("Bitte gib Abfahrts- und Ankunftsort ein.")

    }

  });

  // Eventlistener auf den Button "ALLES LÖSCHEN"
  // Das Event 'click' wird beim Klick auf den Button ausgelöst
  buttonLoeschen.addEventListener('click', function (evt) {

    // Die Input-Felder leeren (bzw. mit Leere überschreiben)
    inputVon.value = "";
    inputNach.value = "";

    // alle dynamisch eingefügten Elemente löschen (bzw. mit Leere überschreiben)
    document.querySelector('#dropdown-von').innerHTML = "";
    document.querySelector('#dropdown-nach').innerHTML = "";
    document.querySelector('#verbindungen').innerHTML = "";

  });

});


// Funktionen fürs Dropdown bei Input-Von
// Funktionen fürs Dropdown bei Input-Von
// Funktionen fürs Dropdown bei Input-Von
// Funktionen fürs Dropdown bei Input-Von
// Funktionen fürs Dropdown bei Input-Von

// Neue Funktion definieren
// Diese Funktion erwartet den Parameter 'meinInput'
function fetchStationenVon(meinInput){

  // mit fetch() das Laden einer externen Datei starten.
  // Als Parameter benötigt fetch() den Pfad zur externen Datei.
  // Wir setzen den Pfad hier aus String + Variable zusammen.
  // 1.
  fetch("https://transport.opendata.ch/v1/locations?type='station'&query='" + meinInput)

  // fetch() erwartet als esten Promise eine Antwort (response)
  .then((response) => {
    // Definieren, welches Format die Antwort hat (wichtig für den nächsten Teil)
    // hier json()
    return response.json();
  })
  // als zweiten Promise erwatet fetch() die Daten
  .then((data) => {

    // die Daten können wir in einer Variable speichern
    // wir speichern aber nicht alle Daten, sondern nur den stations-Array
    let stationen = data.stations

    // weitere Funktion aufrufen, stationen-Array übergeben
    zeichneDropdownVon(stationen);

  })
  // Nur wenn etwas nicht funktioniert hat ...
  .catch(function(error) {
    // ... wird eine Fehlermeldung ausgegeben.
    console.log('Error: ' + error.message);
  });

}

// Neue Funktion definieren
// Diese Funktion erwartet den Parameter 'stationen'
function zeichneDropdownVon(stationen){

  // der Inhalt von #dropdown-von wird geleert (duch Leere ersetzt)
  document.querySelector('#dropdown-von').innerHTML = "";

  // Die forEach() Methode führt eine Funktion für jedes Element
  // eines Arrays aus. Hier vom übergegebenen Stationen-Array.
  // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  stationen.forEach(function(station) {

    // ein neues Listen-Element erstellen und es in einer Variable speichern
    var listelement = document.createElement('li');

    // das neue Element mit dem Namen der aktuellen Station befüllen
    listelement.innerHTML = station.name;

    // dem neuen Element die ID aus der API zuweisen
    // (dieser Schritt ist technisch nicht zwingend)
    listelement.id = station.id;

    // dem neuen Element die Klasse .dropdown-von geben
    // so kann das Element mit CSS gestylet werden
    listelement.classList.add("dropdown-von");

    // Die appendChild() Methode fügt ein Kind (Element) am Ende der Liste
    // aller Kinder des angegebenen Eltern-Knotens an (to append = anhängen).
    document.querySelector('#dropdown-von').appendChild(listelement);

  });

  // Funktion zum hinzufügen der Click-Eventlistener aufrufen
  addKlickListenerVon();

}
// Neue Funktion definieren
// Diese Funktion erwartet keinen Parameter
function addKlickListenerVon() {

  // alle Elemente mit der Klasse .dropdown-von auswählen
  document.querySelectorAll('.dropdown-von')

  // dann für jedes ausgewählte Element eine Funktion ausführen
  .forEach(station => {

    // Inhalt der Funktion:

    // zu jedem Element einen Eventlistener 'Click' hinzufügen
    station.addEventListener('click', function() {

      // Wenn der Eventlistener triggert (beim Klick),
      // wird dieser Code ausgeführt

      // beim Input-Von Feld den Namen des angeklickten Elements als
      // Wert einfügen
      document.querySelector('#input-von').value = this.innerHTML;

      // Das gesamte Dropdown ausblenden (mit Leere überschreiben)
      document.querySelector('#dropdown-von').innerHTML = "";

    })

  });

}

// Gleiche Funktionen fürs Dropdown bei Input-Nach
// Gleiche Funktionen fürs Dropdown bei Input-Nach
// Gleiche Funktionen fürs Dropdown bei Input-Nach
// Gleiche Funktionen fürs Dropdown bei Input-Nach
// Gleiche Funktionen fürs Dropdown bei Input-Nach

// Dieser Teil ist nicht kommentiert,
// da alle Inhalte bereits im oberen Abschnitt erklärt wurden.

function fetchStationenNach(meinInput){

  // Do the fetch
  fetch("https://transport.opendata.ch/v1/locations?type='station'&query='" + meinInput)

  .then((response) => {

    return response.json();
  })
  .then((data) => {

    // console.log(data);

    let stationen = data.stations

    // console.log(stationen);

    zeichneDropdownNach(stationen);

  })
  // Nur wenn etwas nicht funktioniert hat ...
  .catch(function(error) {
    // ... wird eine Fehlermeldung ausgegeben.
    console.log('Error: ' + error.message);
  });

}

function zeichneDropdownNach(stationen){

  document.querySelector('#dropdown-nach').innerHTML = "";

  // Erstelle ein Dropdown bestehend aus List-Elementen aus allen ge-fetcheten Elementen
  stationen.forEach(function(station) {

    var listelement = document.createElement('li');
    listelement.innerHTML = station.name;
    listelement.id = station.id;
    listelement.classList.add("dropdown-nach");

    document.querySelector('#dropdown-nach').appendChild(listelement);

  });

  addKlickListenerNach();

}

function addKlickListenerNach() {

  document.querySelectorAll('.dropdown-nach')
  .forEach(station => {
    station.addEventListener('click', function() {


      // clear the list on click and write innerHTML to input field
      document.querySelector('#input-nach').value = this.innerHTML;
      document.querySelector('#dropdown-nach').innerHTML = "";

    })

  });

}

// Funktionen für die Fahrplanabfrage
// Funktionen für die Fahrplanabfrage
// Funktionen für die Fahrplanabfrage
// Funktionen für die Fahrplanabfrage
// Funktionen für die Fahrplanabfrage

// Neue Funktion definieren
// Diese Funktion erwartet den zusammengesetzten Query als Parameter
function fetchVerbindungen(query) {

  // mit fetch() das Laden einer externen Datei starten.
  // Als Parameter benötigt fetch() den Pfad zur externen Datei.
  // Wir setzen den Pfad hier aus String + Variable zusammen.
  // 1.

  fetch("https://transport.opendata.ch/v1/connections?" + query)

  // fetch() erwartet als esten Promise eine Antwort (response)
  .then((response) => {
    // Definieren, welches Format die Antwort hat (wichtig für den nächsten Teil)
    // hier json()

    return response.json();
  })

  // als zweiten Promise erwatet fetch() die Daten
  .then((data) => {

    // die Daten können wir in einer Variable speichern
    // wir speichern aber nicht alle Daten, sondern nur den stations-Array

    let verbindungen = data.connections;

    console.log(verbindungen);

    // weitere Funktion aufrufen, stationen-Array übergeben
    zeichneVerbindungen(verbindungen);

  })

  // Nur wenn etwas nicht funktioniert hat ...
  .catch(function(error) {
    // ... wird eine Fehlermeldung ausgegeben.
    console.log('Error: ' + error.message);
  });

}

// Neue Funktion definieren
// Diese Funktion erwartet den verbindungen-Array als Paramter
function zeichneVerbindungen(verbindungen){

  // zuerst werden alle vorher angezeigten Verbindungen gelöscht (bzw. mit Leere überschrieben).
  document.querySelector('#verbindungen').innerHTML = "";

  // Die forEach() Methode führt eine Funktion für jedes Element
  // eines Arrays aus. Hier vom übergegebenen Stationen-Array.
  // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  verbindungen.forEach(function(verbindung) {

    // ein neues Div-Element erstellen und es in einer Variable speichern
    var verbindungContainer = document.createElement('div');

    // die benötigten Werte aus dem aktuellen Verbindung-Element auslesen
    // und in Variablen speichern
    let abfahrt = verbindung.from.departureTimestamp;
    let ankunft = verbindung.to.arrivalTimestamp;
    let dauer = verbindung.duration;
    let gleis = verbindung.from.platform

    // Variablen abfahrt und ankunft mit Werten aus der Konvertierung überschreiben
    abfahrt = konvertiereTimestamp(abfahrt);
    ankunft = konvertiereTimestamp(ankunft);

    // die unnötigen Informationen vom String dauer abschneiden
    dauer = dauer.slice(3,8) + 'h';

    // Variablen zu einem String zusammensetzen und mit
    // der Methode innerHTML ins DOM schreiben
    verbindungContainer.innerHTML =
    "<b> Abfahrt: </b>" + abfahrt + "<br>" +
    "<b> Ankunft: </b>" + ankunft + "<br> <br>" +
    "<b> Gleis: </b>" + gleis + "<br> <br>" +
    "<b> Dauer: </b>" + dauer + "<br>";

    // dem neuen Element die Klasse .verbindung geben
    // so kann das Element mit CSS gestylet werden
    verbindungContainer.classList.add("verbindung");

    // Die appendChild() Methode fügt ein Kind (Element) am Ende der Liste
    // aller Kinder des angegebenen Eltern-Knotens an (to append = anhängen).
    document.querySelector('#verbindungen').appendChild(verbindungContainer);

  });

}

function konvertiereTimestamp(timestamp){
  // Funktion von Stackoverflow kopiert und adaptiert
  // https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript

  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(timestamp * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();

  // Will display time in 10:30 format
  var formattedTime = hours + ':' + minutes.substr(-2);

  return formattedTime + ' Uhr';

}
