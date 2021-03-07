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

/*  JS-Objekte | Übung 3 | 03_liste_aus_eigenschaften_erstellen
*  1. Erstellen Sie für die Werte das Array kanton1.amtssprache mit Hilfe von JavaScript eine ungeordnete Liste (ul-Element) und ...
*  2. fügen in diese Liste für jedes Array-Element ein HTML-Listen-Elemen (li-Element) mit dem entsprechenden Wert ein.
*  3. Fügen Sie die vollstäntige HTML-Liste (ul-Element) in das HTML-Element mit der id "kanton_hauptort" ein.
*/

// Informationen sammeln und aufbereiten
  // Sprach-Array in HTML-Liste umwandeln

  // neues ul-Element erzeugen und in Variable sprache_liste speichern.
  // Die neue Liste existiert nur in JS und wird noch nicht im Browser angezeigt.
// 1.

  // Der Inhalt eines jeden Elements im Array sprache des Objekts ...
  for(let i = 0; i < kanton1.amtssprache.length; i++){
    // ... wird ein neues Listen-Element erzeugt, ...
// 2.

    // ... der Inhalt des aktuellen Array-Elements als Text in des neue Listen-Element geschreiben und ...

    // ... das als nächstes Kind-Element in das erzeugte ul-Element geschrieben.

  }

// Informationen in HTML anzeigen
  // Kantonsname in Element mit id="kanton_name" einfügen
  document.querySelector('#kanton_name').textContent = "Kantonsname: " + kanton1.name;
  // Erläuternder Text in Element mit id="kanton_sprache" schreiben

  // Das ober erstellte ul-Element als nächstes Kind-Element in Element mit id="kanton_sprache" schreiben.
  // -> Anzeige im Browser
// 3.

  // Kantonshauptort in Element mit id="kanton_hauptort" einfügen
  document.querySelector('#kanton_hauptort').textContent = "Hauptort: " + kanton1.hauptort;
  // Kantonsfläche in Element mit id="kanton_flaeche" einfügen
  document.querySelector('#kanton_flaeche').textContent = "Fläche: " + kanton1.flaeche;
  // Anzahl Einwohner in Element mit id="kanton_einwohner" einfügen
  document.querySelector('#kanton_einwohner').textContent = "Einwohner: " + kanton1.bevoelkerung.einwohner;
  // Kantonsname in Element mit id="kanton_quote" einfügen
  document.querySelector('#kanton_quote').textContent = "Arbeitslosenquote: " + kanton1.bevoelkerung.quote;
