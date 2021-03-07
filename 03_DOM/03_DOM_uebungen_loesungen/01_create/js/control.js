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

// das zu erstellende <h1> Element in der Variable titel speichern
let titel = document.createElement("H1");

// die Eigenschaft innerhtml des titel Elements setzen
titel.innerHTML = "Versorgungsrechner";

// das neue Element ganz unten (als letztes Child) im Body anfügen
document.body.appendChild(titel);

// das zu erstellende <p> Element in der Variable meldung speichern
let meldung = document.createElement("p");

// die Eigenschaft innerhtml des meldung Elements mit der variable nachricht setzen
meldung.innerHTML = nachricht;

// das neue Element ganz unten (als letztes Child, nach h1) im Body anfügen
document.body.appendChild(meldung);
