// Definiere Style-Anpassungen (z.B. Farbänderungen) neu in der CSS Datei
// als Klassen. Setze Übung 03.03 um, indem du diese Klassen dynamisch hinzufügst oder entfernst,
// statt direkt auf das Style Attribut eines HTML Elements zuzugreifen.

// mit window.prompt die Variablen im Browser durch User-Input setzen
let alter = window.prompt("Gib dein Alter ein.");
let lebenserwartung = window.prompt("Wie hoch schätzt du deine Lebenserwartung?");

// Variablen definieren
let einheit = "Tassen";
let artikel = "Tee";
let anzahlProTag = 2;

// Totalverbrauch ausrechnen
let totalGebraucht = (anzahlProTag * 365) * (lebenserwartung - alter);

// HTML Spans mittels IDs als Variablen definieren
let spanTotalGebraucht = document.querySelector('#totalGebraucht');
let spanEinheit = document.querySelector('#einheit');
let spanArtikel = document.querySelector('#artikel');
let spanMaxAlter = document.querySelector('#maxAlter');

//HTML der Span-Variablen dynamisch füllen
spanTotalGebraucht.innerHTML = totalGebraucht;
spanEinheit.innerHTML = einheit;
spanArtikel.innerHTML = artikel;
spanMaxAlter.innerHTML = lebenserwartung;

if (totalGebraucht > 10000){


} else if (totalGebraucht > 5000){


} else {


};
