// Schreibe alle statischen Elemente des Versorgungsrechners (Titel, Teile der Nachricht)
// direkt ins HTML. Verwende <span> Elemente, um dynamische Inhalte (Variablen)
// mittels JavaScript zu füllen.

// mit window.prompt die Variablen im Browser durch User-Input setzen
let alter = window.prompt("Gib dein Alter ein.");
let lebenserwartung = window.prompt("Wie hoch schätzt du deine Lebenserwartung?");

// Variablen definieren
let einheit = "Tassen";
let artikel = "Tee";
let anzahlProTag = 2;

// Totalverbrauch ausrechnen
let totalGebraucht = (anzahlProTag * 365) * (lebenserwartung - alter);

// die (span) Elemente mit den entsprechenden querySelectors (z.B. #einheit) aus dem HTML holen
// und in Variablen speichern
let spanTotalGebraucht = document.querySelector('#totalGebraucht');
let spanEinheit = document.querySelector('#einheit');
let spanArtikel = document.querySelector('#artikel');
let spanMaxAlter = document.querySelector('#maxAlter');

// im HTML die oben ausgewählten Elemente mit den Werten unseres Rechners füllen
spanTotalGebraucht.innerHTML = totalGebraucht;
spanEinheit.innerHTML = einheit;
spanArtikel.innerHTML = artikel;
spanMaxAlter.innerHTML = lebenserwartung;
