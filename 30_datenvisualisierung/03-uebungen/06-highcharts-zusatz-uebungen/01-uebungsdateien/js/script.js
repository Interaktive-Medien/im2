console.log('script.js wurde erfolgreich geladen');

let datenQuelleVonGithubAlsCSV = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/05-05-2020.csv';
let geparsteCSVDaten = Papa.parse(datenQuelleVonGithubAlsCSV, {
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
				text: 'Die Covid-19 Zahlen vom 5. Mai 2020'
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

