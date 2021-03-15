			
			//Erster Schritt. Das Array erstellen. Beim Tippen den Fehler einbauen, dass am Schluss nach Kaese ein Komma gesetzt wird. Erklären wieso das ein Problem verursachen kann
			let buch = new Array ();
				buch['titel'] = "Ab die Post";
				buch['isbn']  = "344254565X";
				buch['autor']  = "Pratchet";
				buch['pubdate']  = "15.8.2005";

			//Der Inhalt des Kühlschranks darf mit der Klasse erarbeitet werden ;)
			
			//Zweiter Schritt. Das Array im Console.log ausgeben. Indexnummer und Inhalt erläutern.
			console.log(buch);	
			
			//Dritter Schritt. Einzelne Datensätze auslesen	 
			console.log(buch.titel);
			console.log(buch.isbn);
			console.log(buch.autor);
			console.log(buch.pubdate);
			
			
			//Vierter Schritt. Array ergänzen
			buch['kaufdatum'] = "25.05.2020";
			console.log(buch);
			
			
			
			//Element entfernen
			delete buch['pubdate'];
			console.log(buch);
			

			//Einzelarbeit: Assoziatives Array über einen selbst erstellen
			let beni = new Array();
				beni['groesse'] = "180";
				beni['alter'] = "28";
				beni['abschluss'] = "msc";
				beni['job'] = "Lehrbeauftragter";
				beni['hobbys'] = ['Klavier', 'Programmieren', 'Essen', 'Ausgang' ];
				console.log(beni);
				

