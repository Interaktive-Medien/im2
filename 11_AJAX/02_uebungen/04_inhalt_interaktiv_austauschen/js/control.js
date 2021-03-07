/*  AJAX | Übung 4 | 04_inhalt_interaktiv_austauschen
/*  1. Siehe: zugehörige HTML-Datei. (../index.html)
/*  2. Packen Sie den fetch()-Aufruf in eine Fuktion mit dem Namen zeige_externen_inhalt()
/*  3. Als Parameter (dateiname) erhält die Funktion den Dateinamen der externen Datei. (Dateiname ohne Extension)
/*  4. Setzen Sie den Pfad der zu ladenden Datei aus
/*        dem Ordnernamen mit folgenem Schrägstrich,
/*        dem Parameter "dateiname",
/*        der Extension mit vorstehendem Punkt zusammen,
/*      und speichern Sie die so entstandene Zeichenkette in der Variablen "url".
/*  5. Rufen Sie fetch() mit der Variablen url als Parameter auf
/*  6. Geben Sie den geladenen Inhalt als innerHTML in dem HTML-Element mit der ID 'anzeige' aus.

/*  7. Speichern Sie mit Hilfe von .querySelectorAll() alle Buttons mit der class="btn" in einer Variablen als Array.
/*  8. Durchlaufen Sie das Array mit einer for-Schleife ...
/*  9. ... und geben Sie mit Hilfe von .addEventListener() jedem Array-Element (Button) für den EventListener "click" eine Funktion mit, ...
/* 10. ... die den Wert des Attributs data-dateiname des geklickten Buttons in einer Variable speichert und ...
/* 11. ... unsere Funktion zeige_externen_inhalt() aufruft. Als Parameter erhält die Fuktion den Wert der soeben erstellten Variablen.
/* ************************************ */

  // Dieses Skript interagiert mit der zugehörigen HTML-Datei. (../index.html)
  // Weitere Beschreibungen dazu finden Sie dort.


  // Um flexibler arbeiten zu können, packen wir den fetch()-Aufruf in eine Funktion
  // Als Parameter wird der Inhalt ein Dateiname ohne Extension mitgegeben.
  // Funktionsstart
// 2. und 3.

    // Der Pfad zur externen Datei wird dem Ordnernamen, dem Parameter "dateiname" und der Extension zusammengesetzt.
// 4.

// 5.
    fetch(/* 5. */)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        // Das DOM-Element mit der id "anzeige" wirs in der variablen "anzeige" gespeichert.
// 6.
        let anzeige = document.querySelector('#anzeige');

      })
      .catch(function(error) {
        console.log('Error: ' + error.message);
      });
  // Funktionsende ( Ende 2.)


  // Eine Liste (Array) mit allen Elementen mit der class "btn" wird in der Variablen "buttons" gespeichert.
// 7.

  // Die Liste "buttons" wird in einer Schleife durchlaufen.
  // Schleifenstart
// 8.

    // Jedem Listen-Element (jedem Button) wird ein Click-EventListener zugeordnet.
    // Beim Klick wird eine (anonyme) Funktion ausgelöst
    // Funktionsstart (anonyme Funktion)
// 9.

      // in der Variablen aktuellerDateiname speichern wir mit this.getAttribute("data-dateiname") ...
      // ... den Inhalt des Attributs data-dateiname aus dem Button, der gerade geklickt wurde ...
      // ... und dadurch den EventListener ausgelöst hat.   (Dateiname ohne Extension)
// 10.


      // Beim Click auf den Button wird die Funktion zeige_externen_inhalt() Aufgerufen.
      // Als Parameter wird der Inhalt des data-dateiname-Attributs, des jeweiligen Buttons mitgegeben.
// 11.

      // Funktionsende (anonyme Funktion, Ende 9.)

  // Schleifenende ( Ende 8.)
