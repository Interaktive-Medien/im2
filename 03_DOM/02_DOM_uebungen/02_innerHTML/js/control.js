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

// Nachricht zusammensetzen
let nachricht = 'Du brauchst ' + totalGebraucht + ' ' + einheit + ' ' + artikel + ' bis zum Alter von ' + lebenserwartung + ' Jahren.';

// und zum Testen in der Konsole ausgeben
console.log(nachricht);


// Code zum Erstellen neuer DOM Elemente hierhin
