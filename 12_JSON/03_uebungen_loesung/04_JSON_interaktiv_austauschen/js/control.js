/*  JSON | Lösung der Übung 4 | 04_JSON_interaktiv_austauschen
/*  1. Packen Sie den fetch()-Aufruf in eine Fuktion mit dem Namen laden_und_anzeigen()
/*  2. Bei Click auf einen Button soll die soeben erstellte Funktion laden_und_anzeigen()
/*     ... mit dem Inhalt des Attributs data-dateiname aufgerufen werden.
/* ************************************ */

  // Dieses Skript interagiert mit der zugehörigen HTML-Datei.
  // Weitere Beschreibungen dazu finden Sie dort. (../index.html)


  // Siehe: 11_AJAX/03_uebungen_loesung/04_inhalt_interaktiv_austauschen/js/script.js
  // Unterschied: Es wird eine andere Funktion ( laden_und_anzeigen(dateiname) ) aufgerufen
  let buttons = document.querySelectorAll('.btn');
  for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
// 2.
      let aktuellerDateiname = this.getAttribute("data-dateiname");
      laden_und_anzeigen(aktuellerDateiname);
    })
  }

  // Die Funktion laden_und_anzeigen() entspricht
  //    der Funktion zeige_externen_inhalt()
  //    aus: 11_AJAX/03_uebungen_loesung/04_inhalt_interaktiv_austauschen/js/script.js
  // Unterschied: Die URL des Dateinamens wird anders zusammengesetzt
  // Funktionsaufruf
// 1.
  function laden_und_anzeigen(dateiname){
    // Der Pfad zur externen Datei wird dem Ordnernamen, dem Parameter "dateiname" und der Extension (!!! hier: .json !!!) zusammengesetzt.
    let  url = "extern/" + dateiname + ".json";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        kanton_anzeigen(data);
      })
      .catch(function(error) {
        console.log('Error: ' + error.message);
      });
  // Funktionsende  (Ende 1.)
  }

  function kanton_anzeigen(kanton_param){
  // HTML-Struktur innerhalb von JS erzeugen
    let kanton_anzeige = document.createElement('ul');
    let kanton_name = document.createElement('li');
    kanton_anzeige.appendChild(kanton_name);
    let kanton_sprache = document.createElement('li');
    kanton_anzeige.appendChild(kanton_sprache);
    let kanton_hauptort = document.createElement('li');
    kanton_anzeige.appendChild(kanton_hauptort);
    let kanton_flaeche = document.createElement('li');
    kanton_anzeige.appendChild(kanton_flaeche);
    let kanton_einwohner = document.createElement('li');
    kanton_anzeige.appendChild(kanton_einwohner);
    let kanton_quote = document.createElement('li');
    kanton_anzeige.appendChild(kanton_quote);


  // Informationen sammeln und aufbereiten
    let sprache_liste = document.createElement('ul');
    for(let i = 0; i < kanton_param.amtssprache.length; i++){
      let sprach_listenpunkt = document.createElement('li');
      sprach_listenpunkt.textContent = kanton_param.amtssprache[i];
      sprache_liste.appendChild(sprach_listenpunkt);
    }

  // Informationen in HTML-Elemente schreiben
    kanton_name.textContent = "Kantonsname: " + kanton_param.name;
    kanton_sprache.textContent = "Amtsprachen: ";
    kanton_sprache.appendChild(sprache_liste);
    kanton_hauptort.textContent = "Hauptort: " + kanton_param.hauptort;
    kanton_flaeche.textContent = "Fläche: " + kanton_param.flaeche;
    kanton_einwohner.textContent = "Einwohner: " + kanton_param.bevoelkerung.einwohner;
    kanton_quote.textContent = "Arbeitslosenquote: " + kanton_param.bevoelkerung.quote;

    // !!!!!!!
    let html_container = document.querySelector('#anzeige');
    html_container.innerHTML = "";
    html_container.appendChild(kanton_anzeige);
  }
