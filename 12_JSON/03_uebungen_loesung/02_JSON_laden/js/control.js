/*  JSON | Lösung der Übung 2 | 02_JSON_laden
/*  1. Laden Sie mit fetch() die Datei 'extern/kanton1.json'.
/*  2. Stellen sie im response ein, welchen Datentyp fetch() zu erwarten hat.
/*  3. Geben Sie mit console.log() die empfangenen Daten in der Konsole Ihres Browsers aus.
/* ************************************ */

  // Mit fetch() -Funktion die externe Datei 'extern/person1.json' laden.
// 1.
  fetch('extern/kanton1.json')
    .then((response) => {
      // Definiert, welches Format die Antwort hat (wichtig für den nächsten Teil)
      // !!!!! hier JSON !!!!!!
      // fetch() erwaretet jetzt eine valide JSON-Zeichenkette
      // Die empfangegen JSON-Daten werden von JS direkt in ein Objekt umgewandelt.
// 2.
      return response.json();
    })
    .then((data) => {
      // Da JavaScript oben mitgeteilt haben, dass der empfangene Text eine JSON-Zeichenkette ist,
      // können wir die empfangenen Daten direkt als JavaScript-Objekt-Variable speichern.
      // Ausgabe von data in der Konsole des Browsers.
// 3.
      console.log(data);
    })
    .catch(function(error) {
      console.log('Error: ' + error.message);
    });
