// mit fetch() das Laden einer externen Datei starten.
// Als Parameter benötigt fetch() den Pfad zur externen Datei.
fetch('extern/text.txt')
  // Der fetch() aufruf erwartet eine Antwort (response)
  .then((response) => {
    // Definieren, welches Format die Antwort hat (wichtig für den nächsten Teil)
    // hier text
    return response.text();
  })
  // Wenn die Antwort eintrifft ...
  .then((data) => {
    // ... wird sie weiterverarbeitet (hier: Ausgabe in die Konsole)
    console.log(data);
  })
  // Nur wenn etwas nicht funktioniert hat ...
  .catch(function(error) {
    // ... wird eine Fehlermeldung ausgegeben.
    console.log('Error: ' + error.message);
  });
