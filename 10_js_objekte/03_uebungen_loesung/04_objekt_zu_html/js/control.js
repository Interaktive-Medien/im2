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

/*  JS-Objekte | Lösung der Übung 4 | 04_html_mit_js_aus_eigenschaften_erstellen
*  1. Erstellen Sie die HTML-Struktur mit Hilfe von JavaScript ...
*  2. und schreiben Sie die Eigenschaftswerte aus "kanton1" in die entsprechenden Elemente
*  3. Fügen Sie zuletzt die ganze, in JS erstellte HTML-Struktur als ChildNode in das HTML-Element mit der id "conainer" ein.
*/

// 1.
// HTML-Struktur innerhalb von JS erzeugen
// HTML-Struktur existieren nur in JS und wird noch nicht im Browser angezeigt.

// ungeordnete Liste (ul) als JS-Objelt "anzeige" erstellen
let anzeige = document.createElement('ul');
// ungeordnete Liste (ul) als JS-Objelt "kanton_name" erstellen und ...
let kanton_name = document.createElement('li');
// ... als erstes Element an "anzeige" anhängen.
anzeige.appendChild(kanton_name);
// ungeordnete Liste (ul) als JS-Objelt "kanton_sprache" erstellen und ...
let kanton_sprache = document.createElement('li');
// ... als erstes Element an "anzeige" anhängen.
anzeige.appendChild(kanton_sprache);
// ungeordnete Liste (ul) als JS-Objelt "kanton_hauptort" erstellen und ...
let kanton_hauptort = document.createElement('li');
// ... als erstes Element an "anzeige" anhängen.
anzeige.appendChild(kanton_hauptort);
// ungeordnete Liste (ul) als JS-Objelt "kanton_flaeche" erstellen und ...
let kanton_flaeche = document.createElement('li');
// ... als erstes Element an "anzeige" anhängen.
anzeige.appendChild(kanton_flaeche);
// ungeordnete Liste (ul) als JS-Objelt "kanton_einwohner" erstellen und ...
let kanton_einwohner = document.createElement('li');
// ... als erstes Element an "anzeige" anhängen.
anzeige.appendChild(kanton_einwohner);
// ungeordnete Liste (ul) als JS-Objelt "kanton_quote" erstellen und ...
let kanton_quote = document.createElement('li');
// ... als erstes Element an "anzeige" anhängen.
anzeige.appendChild(kanton_quote);

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
kanton_name.textContent = "Kantonsname: " + kanton1.name;
// Erläuternder Text ins JavaScript-Objekt "kanton_sprache" schreiben
kanton_sprache.textContent = "Amtsprachen: ";
// Das ober erstellte JS-Objekt (ul-Element) "sprache_liste" als nächstes Kind-Element ins JavaScript-Objekt "kanton_sprache" schreiben
kanton_sprache.appendChild(sprache_liste);
// Kantonshauptort ins JavaScript-Objekt "kanton_hauptort" einfügen
kanton_hauptort.textContent = "Hauptort: " + kanton1.hauptort;
// Kantonsfläche ins JavaScript-Objekt "kanton_flaeche" einfügen
kanton_flaeche.textContent = "Fläche: " + kanton1.flaeche;
// Anzahl Einwohner ins JavaScript-Objekt "einwohner" einfügen
kanton_einwohner.textContent = "Einwohner: " + kanton1.bevoelkerung.einwohner;
// Kantonsname ins JavaScript-Objekt "quote" einfügen
kanton_quote.textContent = "Arbeitslosenquote: " + kanton1.bevoelkerung.quote;

// HTML-Elemente aus JS in das HTML-Element mit der id="container" schreiben.
// HTML-Element mit der id="container" in JS-Variablen "html_container" speichern
// 3.
let html_container = document.querySelector('#container');
// "anzeige" als Kindelement in "html_container" schreiben
// -> Anzeige im Browser
// 3.
html_container.appendChild(anzeige);
