/*  AJAX | Lösung der Aufgabe 1 | 01_bus_austauschen
/*  Erstellen Sie in der zugehörigen HTML-Datei für jede Churer Buslinei einen Button.
/*  Funktionalisieren Sie die Buttons der zugehörigen Datei so,
/*  Dass beim Klick auf einen Button die passende Text-Datei geladen
/*  und der Inhalt als HTML dargestellt wird.
/*  Die txt-Dateien befinden sich im Verzeichnis "extern".
/* ************************************ */

document.addEventListener("DOMContentLoaded", function(event) {

  // Das DOM-Element mit der id "anzeige" wirs in der variablen "anzeige" gespeichert.
  let anzeige = document.querySelector('#anzeige');

  // Eine Liste (Array) mit allen Elementen mit der class "btn" wird in der Variablen "buttons" gespeichert.
  let buttons = document.querySelectorAll('.btn');
  // Die Liste "buttons" wird in einer Schleife durchlaufen.
  for(let i = 0; i < buttons.length; i++){
    // Jedem Listen-Element (jedem Button) wird ein Click-EventListener zugeordnet.
    buttons[i].addEventListener("click", function(){
      // Kontrolle:
      console.log(this.getAttribute("data-dateiname"));
      // Beim Click auf den Button wird die Funktion zeige_externen_inhalt() Aufgerufen.
      // Als Parameter wird der Inhalt des data-dateiname-Attributs, des jeweiligen Buttons mitgegeben.
      //    (Dateiname ohne Extension)
      zeige_externen_inhalt(this.getAttribute("data-dateiname"));
    })
  }

  // Um flexibler arbeiten zu können, packen wir den fetch()-Aufruf in eine Funktion
  // Als Parameter wird der Inhalt ein Dateiname ohne Extension mitgegeben.
  // Funktionsstart
  function zeige_externen_inhalt(dateiname){
    // Der Pfad zur externen Datei wird dem Ordnernamen, dem Parameter "dateiname" und der Extension zusammengesetzt.
    let url = "extern/" + dateiname + ".txt";
    fetch(url)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        anzeige.innerHTML = data;
      })
      .catch(function(error) {
        console.log('Error: ' + error.message);
      });
  // Funktionsende
  }

});
