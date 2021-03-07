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

/*  JS-Objekte | Übung 5 | 05_funktionen_nutzen
*  1. Packen Sie den kompletten Aufbau in eine Funktion mit dem Namen "kanton_anzeigen()" mit dem Funktionsparameter "kanton_param)".
*     Dem Funktionsparameter "kanton_param" übergeben Sie später beim Funktionsaufruf das Objekt "kanton1".
*  2. Ersetzen Sie innerhalb der Funktion "kanton1" durch "kanton_param".
*  3. Schreiben Sie "anzeige" als Kind-Element in das HTML-Element mit der id="container".
*  4. Rufen Sie die Funktion auf mit dem JS-Objekt "kanton1" als Parameter auf.
*/

// Funktionsaufruf um mit einem kanton-Objekt eine HTML-Struktur zu erzeugen und zurückzugeben
// Selbe Funktionsweise, wie bisher ...
// ... mit dem Unterschied, dass die Eigenschaften nicht mehr direkt aus dem Objekt "kanton1" kommen, ...
// ... sondern das ganze Objekt "kanton1" der Funktion als Parameter "kanton_param" übergeben wird.
// Die Eigenschaften werden innerhalb der Funktion direkt dem Funktionsparameter "kanton_param" entnommen.
// Innerhalb der Funktion überall "kanton1" durch "kanton_param" ersetzen.
// Funktionsstart
// 1. (vergessen Sie nicht das Funktionsende)

// Der Funktionsparameter "kanton_param" enthält jetzt das übergebene Objekt (hier: "kanton1")

// HTML-Struktur innerhalb von JS erzeugen
  let anzeige = document.createElement('ul');
  let kanton_name = document.createElement('li');
  anzeige.appendChild(kanton_name);
  let kanton_sprache = document.createElement('li');
  anzeige.appendChild(kanton_sprache);
  let kanton_hauptort = document.createElement('li');
  anzeige.appendChild(kanton_hauptort);
  let kanton_flaeche = document.createElement('li');
  anzeige.appendChild(kanton_flaeche);
  let kanton_einwohner = document.createElement('li');
  anzeige.appendChild(kanton_einwohner);
  let kanton_quote = document.createElement('li');
  anzeige.appendChild(kanton_quote);


// Informationen sammeln und aufbereiten
  let sprache_liste = document.createElement('ul');
  // "kanton1" durch "kanton_param" ersetzen.
  for(let i = 0; i < kanton1.amtssprache.length; i++){
    let sprach_listenpunkt = document.createElement('li');
  // "kanton1" durch "kanton_param" ersetzen.
    sprach_listenpunkt.textContent = kanton1.amtssprache[i];
    sprache_liste.appendChild(sprach_listenpunkt);
  }

// Informationen in HTML-Elemente schreiben
// 2. "kanton1" durch "kanton_param" ersetzen.
  kanton_name.textContent = "Kantonsname: " + kanton1.name;
  kanton_sprache.textContent = "Amtsprachen: ";
  kanton_sprache.appendChild(sprache_liste);
// 2. "kanton1" durch "kanton_param" ersetzen.
  kanton_hauptort.textContent = "Hauptort: " + kanton1.hauptort;
// 2. "kanton1" durch "kanton_param" ersetzen.
  kanton_flaeche.textContent = "Fläche: " + kanton1.flaeche;
// 2. "kanton1" durch "kanton_param" ersetzen.
  kanton_einwohner.textContent = "Einwohner: " + kanton1.bevoelkerung.einwohner;
// 2. "kanton1" durch "kanton_param" ersetzen.
  kanton_quote.textContent = "Arbeitslosenquote: " + kanton1.bevoelkerung.quote;

  // HTML-Elemente aus JS in das HTML-Element mit der id="container" schreiben.
  let html_container = document.querySelector('#container');
  // "anzeige" als Kindelement in "html_container" schreiben
  // -> Anzeige im Browser
// 3.


// Funktionsende


// Funktionsaufruf mit kanton1
// 4.
