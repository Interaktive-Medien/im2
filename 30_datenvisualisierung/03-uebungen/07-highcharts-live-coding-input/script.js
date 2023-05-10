/* Skripte für die Erstellung des Charts */
console.log('script.js geladen')

document.addEventListener('DOMContentLoaded', function () {
	console.log('DOM geladen')

	const dataUrl = 'https://raw.githubusercontent.com/marc-duby/fhgr-test/live-coding/im2/datavis/data/AirPassengers-2.csv'

	Papa.parse(dataUrl, {
		download: true,
		complete: function (results) {
			// Daten sind ab hier verfügbar...
			// Daten so aufbereiten, dass Highcharts diese interpretieren kann...

			let currentYear
			let yearlyTotal = 0
			let cleanData = []

			console.log(results.data)

			// Wir loopen den Datensatz (results.data) durch
			for (let i = 1; i < results.data.length; i++) {
				// Wir filtern alle Daten heraus, die nicht zwei Spalten haben
				if (results.data[i].length > 1) {

					
					// Wir holen die Jahreszahl aus dem String in der ersten Spalte
					const year = parseInt(results.data[i][0].substring(0, 4))
					console.log(year)

					if (currentYear == undefined) {
						currentYear = year
					}

					if (currentYear == year) {
						yearlyTotal += parseInt(results.data[i][1])
					} else {
						cleanData.push([yearlyTotal])
						currentYear = year
					}

					if (i == results.data.length - 2) {
						cleanData.push([yearlyTotal])
					}

					// console.log(results.data[i])
				}
			}

			console.log(cleanData)

			// Ab hier wird Chart gezeichnet:

			// Chart mit Highcharts erstellen
			Highcharts.chart('chart', {
				title: {
					text: 'Flugpassagiere pro Jahr, weltweit (1949-1959)',
					align: 'left',
				},

				subtitle: {
					text: 'Source: <a href="https://www.kaggle.com/datasets/rakannimer/air-passengers?resource=download" target="_blank">IREC</a>',
					align: 'left',
				},

				yAxis: {
					title: {
						text: 'Anzahl Fluggäste',
					},
				},

				xAxis: {
					accessibility: {
						rangeDescription: 'Jahr',
					},
				},

				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
				},

				plotOptions: {
					series: {
						label: {
							connectorAllowed: false,
						},
						pointStart: 1949,
					},
				},

				series: [
					{
						name: 'Flugpassagiere pro Jahr',
						data: cleanData,
					},
				],

				responsive: {
					rules: [
						{
							condition: {
								maxWidth: 500,
							},
							chartOptions: {
								legend: {
									layout: 'horizontal',
									align: 'center',
									verticalAlign: 'bottom',
								},
							},
						},
					],
				},
			})
		},
	})
})
