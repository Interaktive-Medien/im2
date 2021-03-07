// Dieses Skript interagiert mit der zugehörigen HTML-Datei.
// Weitere Beschreibungen dazu finden Sie dort. (../index.html)


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
      // Das DOM-Element mit der id "anzeige" wirs in der variablen "anzeige" gespeichert.
      let anzeige = document.querySelector('#anzeige');
      anzeige.innerHTML = data;
    })
    .catch(function(error) {
      console.log('Error: ' + error.message);
    });
// Funktionsende
}

// Eine Liste (Array) mit allen Elementen mit der class "btn" wird in der Variablen "buttons" gespeichert.
let buttons = document.querySelectorAll('.btn');
// Die Liste "buttons" wird in einer Schleife durchlaufen.
for(let i = 0; i < buttons.length; i++){
  // Jedem Listen-Element (jedem Button) wird ein Click-EventListener zugeordnet.
  buttons[i].addEventListener("click", function(){
    // Kontrolle:
    console.log(this.getAttribute("data-dateiname"));
    // in der Variablen aktuellerDateiname speichern wir mit this.getAttribute("data-dateiname") ...
    // ... den Inhalt des Attributs data-dateiname aus dem Button, der gerade geklickt wurde ...
    // ... und dadurch den EventListener ausgelöst hat.   (Dateiname ohne Extension)
    let aktuellerDateiname = this.getAttribute("data-dateiname");

    // Beim Click auf den Button wird die Funktion zeige_externen_inhalt() Aufgerufen.
    // Als Parameter wird der Inhalt des data-dateiname-Attributs, des jeweiligen Buttons mitgegeben.
    zeige_externen_inhalt(aktuellerDateiname);
  })
}
