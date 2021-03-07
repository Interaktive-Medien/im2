/*  JSON | Lösung der Übung 3 | 03_JSON_laden_und_anzeigen
/*  1. Kopieren Sie die Funktion kanton_anzeigen() aus der Datei
/*      10_js_objekte/03_uebungen_loesung/07_funktion_nutzen/js/script.js
/*      ... an das Ende dieser Datei.
/*  2. Rufen Sie die soeben kopierte Funktion mit den empfangenen Daten (data) als Parameter auf.
/* ************************************ */

// Mit fetch() -Funktion die externe Datei 'extern/person1.json' laden.
fetch('extern/kanton1.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Aufruf der kanton_anzeigen() -Funktion, die weiter unten definiert ist.
    // Die Funktion erwartet als Parameter ein JS-Objekt.
    // Die empfangegen JSON-Daten werden von JS direkt in ein Objekt umgewandelt.
    // Wir geben der Funktion data als Parameter mit
// 2.
    kanton_anzeigen(data);
  })
  .catch(function(error) {
    console.log('Error: ' + error.message);
  });

  // Die Funktion person_anzeigen() ist aus der Datei
  //    10_js_objekte/03_uebungen_loesung/07_funktion_nutzen/js/script.js
  //    kopiert.
// 1.
  function kanton_anzeigen(kanton_param){
  // Der Funktionsparameter "kanton_param" enthält jetzt das übergebene Objekt (hier: "kanton1")

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

    // !!!!!!! return person_anzeige;
    let html_container = document.querySelector('#container');
    html_container.appendChild(kanton_anzeige);
  }
