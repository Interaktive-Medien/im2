/*  JSON | Übung 3 | 03_JSON_laden_und_anzeigen
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

  })
  .catch(function(error) {
    console.log('Error: ' + error.message);
  });

  // Die Funktion person_anzeigen() ist aus der Datei
  //    10_js_objekte/03_uebungen_loesung/07_funktion_nutzen/js/script.js
  //    kopiert.
// 1.
