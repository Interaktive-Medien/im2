console.log('script.js wurde erfolgreich geladen');

console.log('⚠️ Achtung, bitte Hinweis im ~/js/script.js beachten! ⚠️')

// Wichtige Information für den Kurs 2021:

// Falls Ihr hier die aktuellen Zahlen (zB. 05-05-2021.csv) von dem Server laden möchtet, müsst ihr ein anderes
// Land als 'Sweden' wählen, da die Datenstruktur der CSV-Dateien geändert haben. Solche Anpassungen in der Struktur
// einer Datenquelle sind nicht unüblich, deshalb ist das ein gutes Beispiel für die Flexibilität, die man in der
// Programmierung solcher Datenvisualisierungen aufbringen muss. Mit den Daten 05-05-2020.csv allerdings wird
// der untenstehende Code mit 'Sweden' als Key für das zweite Land funktionieren.

/* Wir parsen die CSV-Daten aus einer lokalen Datei im /data/ Ordner mit der Papa Parse Library */
let datenQuelleVonGithubAlsCSV = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/05-05-2020.csv';
let geparsteCSVDaten = Papa.parse(datenQuelleVonGithubAlsCSV, {
	download: true,
	header: true,
	// Callback Funktion! Sobald die Daten verfügbar sind, wird alles in dieser Funktion aufgerufen:
	complete: function(data) {
		console.log(data);

		/* Wir filtern den Datensatz, um nur einzelne Länder daraus in unserem Chart zu verwenden, mit der .filter() Funktion.
		*
		* Wichtig:
		*
		* Da das Objekt data, das von Papa Parse kommt, in sich selbst nochmals unterteilt ist, müssen wir
		* die Funktion .filter nicht auf data anwenden, sondern auf data.data:
		*  */
		let datenSchweiz = data.data.filter(function(el) {
			return el.Combined_Key === 'Switzerland';
		});

		/* Mit diesem console.log() werden nur die Daten angezeigt, die in der Spalte Admin2 (zweite Spalte)
		*  den Wert === 'Switzerland' haben:
  	*/
		console.log(datenSchweiz);

		/* Daten für die weiteren vier Länder Filtern */

		let datenSchweden = data.data.filter(function(el) {
			return el.Combined_Key === 'Sweden';
		});
		console.log(datenSchweden);

		let datenItalien = data.data.filter(function(el) {
			return el.Combined_Key === 'Italy';
		});
		console.log(datenItalien);

		let datenSuedafrika = data.data.filter(function(el) {
			return el.Combined_Key === 'South Africa';
		});
		console.log(datenSuedafrika);

		let datenSimbabwe = data.data.filter(function(el) {
			return el.Combined_Key === 'Zimbabwe';
		});
		console.log(datenSimbabwe);


		/* Highcharts erst ausführen, wenn die Daten auch wirklich geladen wurden und verfügbar sind: */
		Highcharts.chart('container', {
			chart: {
				type: 'bar'
			},
			title: {
				text: 'Die Covid-19 Zahlen vom 5. Mai 2020'
			},
			subtitle: {
				text: 'Source: <a href="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/05-05-2020.csv">John Hopkins University</a>'
			},
			xAxis: {
				categories: ['Switzerland', 'Sweden', 'Italy', 'South Africa', 'Zimbabwe'],
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

