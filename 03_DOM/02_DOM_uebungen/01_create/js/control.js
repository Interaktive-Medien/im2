// Der Versorgungsrechner aus Übung 01.02 soll neu im DOM visuell dargestellt werden.
// Erstelle dazu einen Titel sowie eine Zeile, in der die Nachricht ausgegeben wird,
// dynamisch mittels JavaScript.

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
