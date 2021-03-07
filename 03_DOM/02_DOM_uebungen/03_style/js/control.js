// Ändere die Farbe des Titels abhängig davon,
// wie viele Einheiten (z.B. Tassen Tee) errechnet wurden.

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

// Möglichkeiten zur CSS-Manipulation:
// https://www.w3schools.com/jsref/dom_obj_style.asp
