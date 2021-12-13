console.log('script.js wurde erfolgreich geladen');

console.log('script.js wurde erfolgreich geladen');

console.log('⚠️ Achtung, bitte Hinweis im ~/js/script.js beachten! ⚠️')

// Wichtige Information für den Kurs 2021:

// Falls Ihr hier die aktuellen Zahlen (zB. 05-05-2021.csv) von dem Server laden möchtet, müsst ihr ein anderes
// Land als 'Sweden' wählen, da die Datenstruktur der CSV-Dateien geändert haben. Solche Anpassungen in der Struktur
// einer Datenquelle sind nicht unüblich, deshalb ist das ein gutes Beispiel für die Flexibilität, die man in der
// Programmierung solcher Datenvisualisierungen aufbringen muss. Mit den Daten 05-05-2020.csv allerdings wird
// der untenstehende Code mit 'Sweden' als Key für das zweite Land funktionieren.

/* Damit wir in hier in JS die Daten des jeweils gestrigen Datums laden können, müssen wir zuerst eine Date-Variable erstellen : */
let zeitStempelJetzt = new Date();

/* Zur Überprüfung das dann in die Konsole schreiben. Wie sieht dieser Zeitstempel aus? */
console.log(zeitStempelJetzt);
/* Bei mir: Thu May 14 2020 09:34:19 GMT+0200 (South Africa Standard Time) */

/*
Nun gibt es von JS verschiedene Funktionen, die uns dabei helfen, die Monate, Tage, Jahre, Stunden usw.
einzeln aus diesem Zeitstempel herauszulesen (Referenz: https://www.w3schools.com/js/js_date_methods.asp).
Jetzt fragen wir uns: Was brauchen wir denn genau? Schaut auf die Daten (csv auf Github), und wie diese
URL zusammengesetzt wird:

https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/05-05-2020.csv

-> Da müssen wir also 05-05-2020.csv ersetzen. Dazu benötien wir drei Dinge: Monat, Tag, Jahr. Diese bekommen wir so:
 */

let aktuellerTag = zeitStempelJetzt.getDate();
let aktuellerMonat = zeitStempelJetzt.getMonth();
let aktuellesJahr = zeitStempelJetzt.getFullYear();

/* Ausloggen, um zu sehen, was wir da genau bekommen: */

console.group('Heutiges Datum ausloggen:');
console.log(aktuellerTag, aktuellerMonat, aktuellesJahr);
console.groupEnd();

/*
Bei mir kommt in der Konsole: 14 4 2020 – also 14 (Tag), 4 (Monat) und 2020 (Jahr). Was ist falsch?
Richtig, der Monat. Weil wir 12 Monate haben, und JS immer bei 0 beginnt, erhalten wir also die Zahl 4 für
den Monat, anstelle von fünf. Ihr müsst also jeweils immer +1 rechnen, bei der Zahl für den Monat:
 */

let aktuellerMonatKorrekt = zeitStempelJetzt.getMonth() + 1;
console.group('Korrekte Daten mit Monatskorrektur:')
console.log(aktuellerTag, aktuellerMonatKorrekt, aktuellesJahr); // 14 5 2020
console.groupEnd();

/*
Soweit, so gut. Nun müsst ihr noch ein paar Anpassungen machen, damit die Zahlen genau so aussehen wie
ihr sie für die Zusammenstellung der URL auch braucht. Ziel ist also sowas:
05-05-2020

– Erstes Problem: Monat und Jahr muss immer zwei Zahlen haben, also eine anführende Null, falls kleiner als 10
– Zweites Problem: String muss zusammengesetzt werden, mit einem Bindestrich.

Versucht das zuerst selbst aus, hier ist dann die Lösung:
 */

if (aktuellerTag <= 9) {
	aktuellerTag = "0" + aktuellerTag;
}

if (aktuellerMonatKorrekt <= 9) {
	aktuellerMonatKorrekt = "0" + aktuellerMonatKorrekt;
}

console.group('Mit anführenden Nullen falls nötig:');
console.log(aktuellerTag, aktuellerMonatKorrekt, aktuellesJahr); // 14 "05" 2020
console.groupEnd();

/*
Jetzt sind die Zahlen für Monat und Tag sicher immer zwei, falls kleiner oder gleich 9, wird eine 0 angefügt.
Ihr seht, jetzt ist da "05" als String ausgeloggt, weil wir ja "0" + aktuellerTag ausgeführt haben, was dann
ein String keine Zahlenvariable (float/int) mehr ist.

Wie setzen wir das jetzt zu einem String zusammen, der so aussieht: 05-05-2020.csv ?
Hinweis: Im Englischen verwenden wir immer MONAT-TAG-JAHR, nicht umgekehrt.
 */

let datumStringFuerDownload = aktuellerMonatKorrekt + "-" + aktuellerTag + "-" + aktuellesJahr + ".csv";
console.group('Korrekter Datum-String:');
console.log(datumStringFuerDownload); // 05-14-2020.csv
console.groupEnd();

/*
Wir haben also das Datum so umstrukturiert, dass wir diese Variable nun für unseren Download verwenden können. Ihr
werdet aber sehen, dass wir ein weiters Problem lösen müssen. Was könnte das sein?

... richtig, die Daten werden jeweils erst um Mitternacht auf Github gestellt. Was heisst das für uns? Wir müssen
IMMER die Daten des Vortages herunterladen, um sicherzustellen, dass diese auch schon verfügbar seind als .csv-File.

Wie gehen wir das an? Ja, wir könnten beim Tag einfach aktuellerTag - 1; angeben, wie beim Monat das + 1 angegeben wird.

– Was aber, wenn es der erste Tag des Monats ist, und wir dann versuchen, den Tag 0 zu laden?

Schaut euch dazu die Library moment.js an: https://momentjs.com/
-> Parse, validate, manipulate, and display dates and times in JavaScript.

Wir müssen diese nun im inde.xhtml, vor dem script.js, erst einbinden. Das mache ich via CDN, zum Beispiel von hier:
https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/moment.min.js

Lest mal in der Dokumentation von moment.js mehr über die moment().subtract() Funktion nach. Wie bauen wir unser
Datum nun so um, dass es immer ein Tag von dem heutigen Datum abzieht? Also am 1. Januar dann den 31. Dezember
angeben würde?
 */

let zeitStempelGestern = moment(zeitStempelJetzt).subtract(24, 'hours');
console.group('Zeitstempel von gestern:');
console.log(zeitStempelGestern); // Das gesamte moment() Objekt wird ausgeloggt. Nicht sehr hilfreich!
console.log(zeitStempelGestern.format("MM-DD-YYYY")); // 05-13-2020
console.groupEnd();

let zeitStempelGesternFormatiert = zeitStempelGestern.format("MM-DD-YYYY");

/*
Voilà! Wir haben uns dabei auch gleich noch eine ganze Menge Arbeit beim Formatieren des Datums gespart. Mit
der moment().format('MM-DD-YYYY'); Funktion geben wir nämlich an, dass wir das Datum gerne im Format
MM-DD-YYYY hätten. moment.js erledigt das für uns. Ihr könntet hier nun verschiedene Formate angeben,
und bekommt das gewünschte Resultat zurück.
Dokumentation: https://momentjs.com/docs/ -> sucht nach "format"
 */

/*
Und jetzt müsst ihr die Datenquelle nur noch richtig zusammenbasteln, dann lädt eure App immer die jeweils
gestrigen Daten vom Zeitpunkt des JS Datums im Browser des Betrachters:
 */

let datenQuelleVongGesternAufGithubAlsCSV = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/' + zeitStempelGesternFormatiert + '.csv';

// let datenQuelleVonGithubAlsCSV = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/05-05-2020.csv';
// ^ diese brauchen wir nicht mehr

/*
Was fehlt noch? Ja, wir müssen im Titel des Diagramms noch das Datum anpassen. Dazu müsst ihr ZUERST
noch die deutsche "locale" Datei von Moment.js aus dem CDN in euer index.html einfügen, und zwar NACH
der moment.js datei. Die fand ich so auf cdnjs.com:
https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/locale/de-ch.min.js (als <script> einfügen!)

DANACH habt ihr die Funktion .locale in moment.js zur Verfügung. mit .locale('de') sagen wir also dem
moment.js, dass alle Strings auf deutsch übersetzt werden sollen, wir bekommen also Mai statt May, wenn
wir das so schreiben:
 */
let deutscheMonatsBezeichnungVonDatumGestern = zeitStempelGestern.locale('de').format('MMMM');
/* Info: Das .format('MMMM'); steht für "gib mir den Monat als String" */

console.group('Deutsches Datum:');
console.log(deutscheMonatsBezeichnungVonDatumGestern);
console.groupEnd();

/* Dann einfach noch den Titel richtig zusammensetzen, so: */
let tagAusZeitsempelGestern = zeitStempelGestern.format('DD'); // Gibt uns eine Zahl mit 0 am Anfang, also 01-09, oder dann 11, 12, usw...
let monatAusZeitstempelGestern = zeitStempelGestern.format('MMMM'); // Gibt uns den String "Mai"
let jahrAusZeitstempelGestern = zeitStempelGestern.format('YYYY'); // Gibt uns das ganze Jahr, 2020

let dynamischerTitelFuerDiagram = "Die Covid-19 Zahlen vom " + tagAusZeitsempelGestern + ". " + monatAusZeitstempelGestern + " " + jahrAusZeitstempelGestern;

/* Diesen Titel dann zuletzt noch unten bei der Highcharts-Konfiguration austauschen: */

let geparsteCSVDaten = Papa.parse(datenQuelleVongGesternAufGithubAlsCSV, { // hier nun die neue URL verwenden
	download: true,
	header: true,
	complete: function(data) {
		let datenSchweiz = data.data.filter(function(el) {
			return el.Combined_Key === 'Switzerland';
		});
		let datenSchweden = data.data.filter(function(el) {
			return el.Combined_Key === 'Sweden';
		});
		let datenItalien = data.data.filter(function(el) {
			return el.Combined_Key === 'Italy';
		});
		let datenSuedafrika = data.data.filter(function(el) {
			return el.Combined_Key === 'South Africa';
		});
		let datenSimbabwe = data.data.filter(function(el) {
			return el.Combined_Key === 'Zimbabwe';
		});

		console.group('Gefilterte Daten ausloggen:');
		console.log(datenSchweiz, datenSchweden, datenItalien, datenSuedafrika, datenSimbabwe)
		console.groupEnd();

		Highcharts.chart('container', {
			chart: {
				type: 'bar'
			},
			title: {
				text: dynamischerTitelFuerDiagram
			},
			subtitle: {
				text: 'Source: <a href="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/05-05-2020.csv">John Hopkins University</a>'
			},
			xAxis: {
				categories: ['Schweiz', 'Schweden', 'Italien', 'Südafrika', 'Simbabwe'],
				title: {
					text: null
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Personen',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				valueSuffix: ' Personen'
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				}
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'top',
				x: -40,
				y: 80,
				floating: true,
				borderWidth: 1,
				backgroundColor:
					Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
				shadow: true
			},
			credits: {
				enabled: false
			},
			series: [{
				name: 'Bestätigt',
				data: [
					parseInt(datenSchweiz[0].Confirmed), parseInt(datenSchweden[0].Confirmed), parseInt(datenItalien[0].Confirmed), parseInt(datenSuedafrika[0].Confirmed), parseInt(datenSimbabwe[0].Confirmed)
				]
			}, {
				name: 'Tote',
				data: [
					parseInt(datenSchweiz[0].Deaths), parseInt(datenSchweden[0].Deaths), parseInt(datenItalien[0].Deaths), parseInt(datenSuedafrika[0].Deaths), parseInt(datenSimbabwe[0].Deaths)
				]
			}, {
				name: 'Erholt',
				data: [
					parseInt(datenSchweiz[0].Recovered), parseInt(datenSchweden[0].Recovered), parseInt(datenItalien[0].Recovered), parseInt(datenSuedafrika[0].Recovered), parseInt(datenSimbabwe[0].Recovered)
				]
			}, {
				name: 'Aktiv',
				data: [
					parseInt(datenSchweiz[0].Active), parseInt(datenSchweden[0].Active), parseInt(datenItalien[0].Active), parseInt(datenSuedafrika[0].Active), parseInt(datenSimbabwe[0].Active)
				]
			}]
		});
	},
	error: function(err) {
		console.log(err);
	}
})

