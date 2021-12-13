console.log('script.js wurde erfolgreich geladen');

/* Eigene Skripte für die Datenvisualisierung */

/* Tabelle Befüllen (Übung 3) */

let data = [
	{
		"Erwerbsstatus": "  Selbständigerwerbende",
		"Männer": " 52,5  ",
		"Frauen": " 48,4  ",
		"Total": " 51,4  "
	},
	{
		"Erwerbsstatus": "  Arbeitnehmende in eigener Firma",
		"Männer": " 49,1  ",
		"Frauen": " 47,2  ",
		"Total": " 48,9  "
	},
	{
		"Erwerbsstatus": "  Mitarbeitende Familienmitglieder",
		"Männer": " 47,4  ",
		"Frauen": " 46,5  ",
		"Total": " 47,1  "
	},
	{
		"Erwerbsstatus": "  Arbeitnehmende",
		"Männer": " 41,5  ",
		"Frauen": " 40,3  ",
		"Total": " 41,1  "
	},
	{
		"Erwerbsstatus": "  Lehrlinge",
		"Männer": " 30,1  ",
		"Frauen": " 28,8  ",
		"Total": " 29,5  "
	}
]

let tabelle = document.querySelector('.chart-table')
console.log(tabelle);

function reiheHinzufuegen(row) {
	let neueReihe = tabelle.insertRow(-1);

	let cell1 = neueReihe.insertCell(0);
	let cell2 = neueReihe.insertCell(1);
	let cell3 = neueReihe.insertCell(2);
	let cell4 = neueReihe.insertCell(3);

	cell1.innerHTML = row.Erwerbsstatus;

	cell2.innerHTML = parseFloat(row.Männer.replace(',','.')) + "<div class='bar' style='width: " + parseFloat(row.Männer.replace(',','.')) / 52.5 * 100 + "%;'></div>";
	cell3.innerHTML = parseFloat(row.Frauen.replace(',','.')) + "<div class='bar' style='width: " + parseFloat(row.Frauen.replace(',','.')) / 52.5 * 100 + "%;'></div>";
	cell4.innerHTML = parseFloat(row.Total.replace(',','.')) + "<div class='bar' style='width: " + parseFloat(row.Total.replace(',','.')) / 52.5 * 100 + "%;'></div>";
}

for (let i = 0; i < data.length; i++) {
	reiheHinzufuegen(data[i]);
}

/* Piktogramme (Übung 4) */

