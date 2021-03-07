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

/*  JS-Objekte | Übung 4 | 04_html_mit_js_aus_eigenschaften_erstellen
*  1. Erstellen Sie die HTML-Struktur mit Hilfe von JavaScript ...
*  2. und schreiben Sie die Eigenschaftswerte aus "kanton1" in die entsprechenden Elemente
*  3. Fügen Sie zuletzt die ganze, in JS erstellte HTML-Struktur als ChildNode in das HTML-Element mit der id "conainer" ein.
*/

// 1.
// HTML-Struktur innerhalb von JS erzeugen
// HTML-Struktur existieren nur in JS und wird noch nicht im Browser angezeigt.

// ungeordnete Liste (ul) als JS-Objelt "anzeige" erstellen

// ungeordnete Liste (ul) als JS-Objelt "kanton_name" erstellen und ...

// ... als erstes Element an "anzeige" anhängen.

// ungeordnete Liste (ul) als JS-Objelt "kanton_sprache" erstellen und ...

// ... als erstes Element an "anzeige" anhängen.

// ungeordnete Liste (ul) als JS-Objelt "kanton_hauptort" erstellen und ...

// ... als erstes Element an "anzeige" anhängen.

// ungeordnete Liste (ul) als JS-Objelt "kanton_flaeche" erstellen und ...

// ... als erstes Element an "anzeige" anhängen.

// ungeordnete Liste (ul) als JS-Objelt "kanton_einwohner" erstellen und ...

// ... als erstes Element an "anzeige" anhängen.

// ungeordnete Liste (ul) als JS-Objelt "kanton_quote" erstellen und ...

// ... als erstes Element an "anzeige" anhängen.


// Informationen sammeln und aufbereiten
// neues ul-Element erzeugen und in Variable sprache_liste speichern.
// Die neue Liste existiert nur in JS und wird noch nicht im Browser angezeigt.
let sprache_liste = document.createElement('ul');
for(let i = 0; i < kanton1.amtssprache.length; i++){
  let sprach_listenpunkt = document.createElement('li');
  sprach_listenpunkt.textContent = kanton1.amtssprache[i];
  sprache_liste.appendChild(sprach_listenpunkt);
}

// 2.
// Informationen in HTML-Elemente schreiben
// HTML-Elemente existieren nur in JS und werden noch nicht im Browser angezeigt.
// Kantonsname ins JavaScript-Objekt "kanton_name" einfügen
// ???????????.textContent = "Kantonsname: " + kanton1.name;
// Erläuternder Text ins JavaScript-Objekt "kanton_sprache" schreiben
// ???????????.textContent = "Amtsprachen: ";
// Das ober erstellte JS-Objekt (ul-Element) "sprache_liste" als nächstes Kind-Element ins JavaScript-Objekt "kanton_sprache" schreiben
// ???????????.appendChild(sprache_liste);
// Kantonshauptort ins JavaScript-Objekt "kanton_hauptort" einfügen
// ???????????.textContent = "Hauptort: " + kanton1.hauptort;
// Kantonsfläche ins JavaScript-Objekt "kanton_flaeche" einfügen
// ???????????.textContent = "Fläche: " + kanton1.flaeche;
// Anzahl Einwohner ins JavaScript-Objekt "einwohner" einfügen
// ???????????.textContent = "Einwohner: " + kanton1.bevoelkerung.einwohner;
// Kantonsname ins JavaScript-Objekt "quote" einfügen
// ???????????textContent = "Arbeitslosenquote: " + kanton1.bevoelkerung.quote;

// HTML-Elemente aus JS in das HTML-Element mit der id="container" schreiben.
// HTML-Element mit der id="container" in JS-Variablen "html_container" speichern
// 3.

// "anzeige" als Kindelement in "html_container" schreiben
// -> Anzeige im Browser
// 3.
