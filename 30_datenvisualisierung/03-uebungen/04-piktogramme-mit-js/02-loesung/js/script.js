console.log('script.js wurde erfolgreich geladen');

/* Übung 3, Tabelle */

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

/* Übung 4, Piktogramm */

// Piktogramm Container selektionieren
let piktogrammContainer = document.querySelector('.piktogramm');

// Aus den Daten lesen, was die durchschnittliche Stundenanzahl pro Schweizer pro Woche ist (42.1), das dann in Minuten
// umrechnen, und geteilt durch die Anzahl Minuten pro Pomodoro (20) rechnen, um auf die Anzahl Pomodoros pro Woche zu kommen
let zeitFuerEinPomodoroInMinuten = 25;
let durchschnittsArbeitszeitSchweizerProWocheInMinuten = 42.1 * 60;
let anzahlPomodorosSchweizerProWoche = durchschnittsArbeitszeitSchweizerProWocheInMinuten / zeitFuerEinPomodoroInMinuten;

// Wir erstellen ein neues Element, eine "Big Number", die uns die Anzahl Pomodori mitteilt
let neueGrosseZahl = document.createElement("p");
// ... die Klasse .big-number wird in chart.css definiert
neueGrosseZahl.setAttribute('class', 'big-number');
// Hier setzen wir den Inhalt für das neue <p> Element, mit der Anzahl Pomodori, die ein durchschnittlicher
// Schweizer pro Woche schaffen kann:
neueGrosseZahl.innerHTML = "Total: <strong>" + anzahlPomodorosSchweizerProWoche + "</strong> Pomodori";
// Und dann wird das <p> Element, also die Big Number, zum Piktogramm-Div hinzugefügt:
document.querySelector('.piktogramm').appendChild(neueGrosseZahl);

/// Wir loopen so viel mal, wie wir Pomodori haben (Berechnung oben)
for (let i = 0; i < anzahlPomodorosSchweizerProWoche; i++) {
	// Erstellen ein neues <img> Element mit JS
	let neueTomate = document.createElement("img");
	// Setzen die src des <img> Elements auf den realtiven Pfad des svg, das wir von Noun Project heruntergeladen haben
	neueTomate.src = './imgs/tomate.svg';
	// Setzen die Klasse für die einzelnen Tomaten-Icons. Diese sind in chart.css definiert (.pomodoro)
	neueTomate.setAttribute('class', 'pomodoro');
	neueTomate.setAttribute('id', 'pomodoro-' + i);
	// Und fügen in jedem Loop eine Tomate zum Container hinzu
	piktogrammContainer.appendChild(neueTomate);
	let neueTomateDOMElement = document.querySelector('#pomodoro-' + i);
	setTimeout(function () {
		neueTomateDOMElement.classList.add('visible');
	}, i * 15)
}

