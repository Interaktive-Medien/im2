/*  JSON | Lösung der Aufgabe 1 | 01_JSON_Busplan
/*  Funktionalisieren Sie die Buttons der zugehörigen Datei so,
/*  Dass beim Klick auf einen Button die passende JSON-Datei geladen,
/*  der Inhalt aufbereitet und als HTML-Dargestellt wird.
/*  Die JSON-Dateien befinden sich im Verzeichnis "extern".
/* ************************************ */


let buttons = document.querySelectorAll('.btn');
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
// !!!!!!
    laden_und_anzeigen(this.getAttribute("data-dateiname"));

  })
}

function laden_und_anzeigen(dateiname){
  let  url = "extern/" + dateiname + ".json";
  fetch(url)
    .then((response) => {
      // Definieren, welches Format die Antwort hat (wichtig für den nächsten Teil)
      // !!!!! hier JSON !!!!!!
      return response.json();
    })
    .then((data) => {
      bus_anzeigen(data);
    })
    .catch(function(error) {
      console.log('Error: ' + error.message);
    });
}

function bus_anzeigen(bus_parameter){

  let bus_anzeige = document.createElement('div');
  let liniennummer_anzeige = document.createElement('h2');
  liniennummer_anzeige.textContent = bus_parameter.liniennummer;

  let kurzbeschreibung_anzeige = document.createElement('h3');
  kurzbeschreibung_anzeige.textContent = bus_parameter.kurzbeschreibung;

  let haltestellen_liste = document.createElement('ul');
  for(let i = 0; i < bus_parameter.haltestellen.length; i++){
    let haltestelle = document.createElement('li');
    haltestelle.textContent = bus_parameter.haltestellen[i];
    haltestellen_liste.appendChild(haltestelle);
  }

  let html_container = document.querySelector('#anzeige');
  html_container.innerHTML = "";
  html_container.appendChild(liniennummer_anzeige);
  html_container.appendChild(kurzbeschreibung_anzeige);
  html_container.appendChild(haltestellen_liste);
}
