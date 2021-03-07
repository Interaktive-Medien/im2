/*  AJAX | Übung 1 | 01_externen_text_laden
/* 1. Laden Sie den Inhalt aus der Datei 'extern/text.txt' mit Hilfe der fetch()-API
/* 2. Geben Sie im ersten Promise an, welches Datenformat als Antwort erwartet wird.
/* 3. Geben Sie den geladenen Text in der Konsole aus.
/* Kontrollieren Sie das Ergebnis in der Konsole ihres Browsers.
/* ************************************ */

  // mit fetch() das Laden einer externen Datei starten.
  // Als Parameter benötigt fetch() den Pfad zur externen Datei.
// 1.
  fetch(/* 1. */)
    // fetch() erwartet als esten Promise eine Antwort (response)
    .then((response) => {
      // Definieren, welches Format die Antwort hat (wichtig für den nächsten Teil)
      // hier text()
// 2.

    })
    // als zweiten Promise erwatet fetch() die Daten
    .then((data) => {
      // ... wird sie weiterverarbeitet (hier: Ausgabe in die Konsole)
// 3.

    })
    // Nur wenn etwas nicht funktioniert hat ...
    .catch(function(error) {
      // ... wird eine Fehlermeldung ausgegeben.
      console.log('Error: ' + error.message);
    });
    