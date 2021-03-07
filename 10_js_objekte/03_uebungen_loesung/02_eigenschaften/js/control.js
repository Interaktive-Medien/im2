let kanton1 = {
  name : 'Bern',
  amtssprache: ['Deutsch', ' Französich'],
  hauptort: 'Bern',
  flaeche: 5959.24,
  bevoelkerung: {
    einwohner : 1034977,
    quote: '2,9 %'
  }
};

/*  JS-Objekte | Lösung der Übung 2 | 02_eigenschaften_in_html
*   Übertragen Sie die Werte aus dem JS-Objekt kanton1 in die li-Elemente der HTML-Liste.
*/

// Informationen sammeln und aufbereiten
  // Sprachen-Liste in Text umwandeln
  // leere Variable für den auszugebenden Sprachtext erzeugen
  let sprache = "";
  // Der Inhalt eines jeden Elements im Array "sprache" des Objekts in einer for-Schleife ...
  for(let i = 0; i < kanton1.amtssprache.length; i++){
    // ...  der Variablen sprache mit einem Komma und einem Leerzeichen angehängt.
    sprache = sprache + kanton1.amtssprache[i] + ", ";
    // Ende for-Schleife
  }

// Informationen in HTML anzeigen
  // Kantonsname in Element mit id="kanton_name" einfügen
  document.querySelector('#kanton_name').textContent = "Kantonsname: " + kanton1.name;
  // Inhalt der Variablen sprache in Element mit id="kanton_sprache" einfügen
  document.querySelector('#kanton_sprache').textContent = "Amtsprachen: " + sprache;
  // Kantonshauptort in Element mit id="kanton_hauptort" einfügen
  document.querySelector('#kanton_hauptort').textContent = "Hauptort: " + kanton1.hauptort;
  // Kantonsfläche in Element mit id="kanton_flaeche" einfügen
  document.querySelector('#kanton_flaeche').textContent = "Fläche: " + kanton1.flaeche;
  // Anzahl Einwohner in Element mit id="kanton_einwohner" einfügen
  document.querySelector('#kanton_einwohner').textContent = "Einwohner: " + kanton1.bevoelkerung.einwohner;
  // Kantonsname in Element mit id="kanton_quote" einfügen
  document.querySelector('#kanton_quote').textContent = "Arbeitslosenquote: " + kanton1.bevoelkerung.quote;
