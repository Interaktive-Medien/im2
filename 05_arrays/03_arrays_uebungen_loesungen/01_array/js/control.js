			//Erster Schritt. Das Array erstellen. Beim Tippen den Fehler einbauen, dass am Schluss nach Kaese ein Komma gesetzt wird. Erklären wieso das ein Problem verursachen kann
			var kuehlschrank = ['Apfel', 'Milch', 'Brot', 'Kaese' ];
			//Der Inhalt des Kühlschranks darf mit der Klasse erarbeitet werden ;)

			//Zweiter Schritt. Das Array im Console.log ausgeben. Indexnummer und Inhalt erläutern.
			console.log(kuehlschrank);

			//Dritter Schritt. Die Länge des Arrays auslesen. Wieso kann man das benötigen?
			console.log(kuehlschrank.length);



			//Fünfter Schritt. Das Array manipulieren
			var last = kuehlschrank.pop();
			//Überprüfung
			console.log(kuehlschrank);

			//Sechster Schritt. Das Array manipulieren
			var newLength = kuehlschrank.push('Orange');
			//Überprüfung
			console.log(kuehlschrank);


			//Einzelarbeit: Index ermitteln und Datensätze mit Index manipulieren
			var pos = 1, n = 2;
			var geloeschteObjekte = kuehlschrank.splice(pos, n); 
			console.log(kuehlschrank);
			console.log(geloeschteObjekte);
