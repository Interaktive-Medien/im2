console.log('script.js wurde erfolgreich geladen');

/* Eigene Skripte für die Datenvisualisierung */

let data = [
	{
		"Erwerbsstatus": "  Selbständigerwerbende",
		"Maenner": " 52,5  ",
		"Frauen": " 48,4  ",
		"Total": " 51,4  "
	},
	{
		"Erwerbsstatus": "  Arbeitnehmende in eigener Firma",
		"Maenner": " 49,1  ",
		"Frauen": " 47,2  ",
		"Total": " 48,9  "
	},
	{
		"Erwerbsstatus": "  Mitarbeitende Familienmitglieder",
		"Maenner": " 47,4  ",
		"Frauen": " 46,5  ",
		"Total": " 47,1  "
	},
	{
		"Erwerbsstatus": "  Arbeitnehmende",
		"Maenner": " 41,5  ",
		"Frauen": " 40,3  ",
		"Total": " 41,1  "
	},
	{
		"Erwerbsstatus": "  Lehrlinge",
		"Maenner": " 30,1  ",
		"Frauen": " 28,8  ",
		"Total": " 29,5  "
	}
]

// Tabelle nach Klasse .chart-table selektieren und in Variable speichern
let tabelle = document.querySelector('.chart-table')
console.log(tabelle);

function reiheHinzufuegen(row) {
	// Neue Reihe zu Tabelle hinzufügen, die -1 macht, dass die Reihe am Ende hinzugefügt wird:
	let neueReihe = tabelle.insertRow(-1);

	// Vier Zellen zu der neuen Row hinzufügen:
	let cell1 = neueReihe.insertCell(0);
	let cell2 = neueReihe.insertCell(1);
	let cell3 = neueReihe.insertCell(2);
	let cell4 = neueReihe.insertCell(3);

	// Diese vier Zellen ^ mit HTML befüllen:

	// Für die erste Zelle nehmen wir den Erwebsstatus einfach so als String rein, ohne ihn zu verändern:
	cell1.innerHTML = row.Erwerbsstatus;

	/* Die nächsten drei Zellen sind da etwas komplexer. Zuerst müssen wir den String bereinigen, und das Komma zu
	einem Punkt verwandeln, mit .replace() – diesen Werte "parsen" wir dann zu einer Float Variable, damit wir nicht
	mehr einen String, sondern eine Zahl verwenden. Diese können wir dann später zur Berechnung der Balkenbreite brauchen.

	Die Balkenbreite stützt sich auf die Excel-Formael, die wir in den vorherigen Übungen verwendeten:
	WERT / WERT_MAX * 100
	und wird aus Strings und Berechnungen zusammengesetzt.

	Verkettungen von String und Funktion / Variabel in Javascript funktioniert mit dem " + + " oder ' + + ', je nachdem,
	mit welchen Anführungszeichen der String eröffnet wurde.
	*/
	cell2.innerHTML = parseFloat(row.Maenner.replace(',','.')) + "<div class='bar slide-in-left' style='width: " + parseFloat(row.Maenner.replace(',','.')) / 52.5 * 100 + "%;'></div>";
	cell3.innerHTML = parseFloat(row.Frauen.replace(',','.')) + "<div class='bar slide-in-left' style='width: " + parseFloat(row.Frauen.replace(',','.')) / 52.5 * 100 + "%;'></div>";
	cell4.innerHTML = parseFloat(row.Total.replace(',','.')) + "<div class='bar slide-in-left' style='width: " + parseFloat(row.Total.replace(',','.')) / 52.5 * 100 + "%;'></div>";
}

for (let i = 0; i < data.length; i++) {
	reiheHinzufuegen(data[i]);
}