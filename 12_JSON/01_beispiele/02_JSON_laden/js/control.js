// Mit fetch() -Funktion die externe Datei 'extern/person1.json' laden.
fetch('extern/person1.json')
  .then((response) => {
    // Definiert, welches Format die Antwort hat (wichtig für den nächsten Teil)
    // !!!!! hier JSON !!!!!!
    // fetch erwaretet jetzt eine validen JSON-Zeichenkette
    // Die empfangegen JSON-Daten werden von JS direkt in ein Objekt umgewandelt.
    return response.json();
  })
  .then((data) => {
    // Da JavaScript oben mitgeteilt haben, dass der empfangene Text eine JSON-Zeichenkette ist,
    // können wir die empfangenen Daten direkt als JavaScript-Objekt-Variable speichern.
    // Ausgabe von data in der Konsole des Browsers.
    console.log(data);
  })
  .catch(function(error) {
    console.log('Error: ' + error.message);
  });
