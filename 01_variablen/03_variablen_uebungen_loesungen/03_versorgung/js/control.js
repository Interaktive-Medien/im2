// Ein ängstlicher Bürger plant, wegen des Coronavirus sein Haus nicht mehr zu verlassen.
// Entwickle einen Versorgungsrechner, der ihm in der Konsole ausgibt,
// wie viele Beutel Tee oder Packungen Pasta er heute kaufen muss,
// um bis an sein Lebensende auszuharren.

// Verwende Variablen für Alter, Lebenserwartung,
// Konsum pro Tag sowie Artikel (Tee) und Einheit (Beutel).

// Beispiellösung:
// Du brauchst 56210 Beutel Tee bis zum Alter von 100 Jahren.

// definieren von Zahlenvariablen alter und lebenserwartung
let alter = 23;
let lebenserwartung = 100;

// definieren von Textvariablen einheit und artikel
let einheit = "Tassen";
let artikel = "Tee";

// definieren der Menge, die pro Tag von diesem Artikel konsumiert wird
let anzahlProTag = 2;

// definieren der Variable proJahr, in der wir den Verbrauch des Artikels pro Jahr berechnen
let proJahr;

// Verbrauch pro Jahr berechnen mit anzahlProTag * 365 und in Variable speichern
proJahr = (anzahlProTag * 365);

// definieren der Variable dauer, in der wir berechnen, wie viele Jahre uns noch bleiben
let dauer;

// berechnen der restlichen Lebensjahre mittels lebenserwartung - alter und speichern in der Variable
dauer = (lebenserwartung - alter);

// deklarieren der Variable totalGebraucht
let totalGebraucht;

// berechnen des Totalverbrauchs mittels proJahr * dauer
totalGebraucht = proJahr * dauer;

// Zusammensetzen der Nachricht
let nachricht = 'Du brauchst ' + totalGebraucht + ' ' + einheit + ' ' + artikel + ' bis zum Alter von ' + lebenserwartung + ' Jahren.';

// Ausgabe in der Konsole
console.log(nachricht);
