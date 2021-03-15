			//Die beiden Beispiele aus der Präsentation. Verdeutlichung das viele Wege nach Rom führen!
			var schritt;
			 for (schritt = 0; schritt < 5; schritt++) {
				console.log('Gehe einen Schritt nach Osten');
			 }
			
			var n = 0; var x = 0;
			while (n < 5){ 
				n++; x += n; 
				console.log('Gehe einen Schritt nach Osten');
			}

			
			//Iteration durch ein Array. Wir nehmen wieder den Kühlschrank hervor
			var kuehlschrank = ['Apfel', 'Milch', 'Brot', 'Kaese' ];
			//Wir wissen wie viele Elemente im Kühlschrank sind
			console.log(kuehlschrank.length);
			//Daraus kann eine schleife gebaut werden
			for (var x = 0; x < kuehlschrank.length; x++){
				console.log(kuehlschrank[x]);
			}
			
			//Wir bauen einen grösseren Kühlschrank
			var regal0 = ['Milch','Brot','Zwiebel'];
			var regal1 = ['Orangensaft','Apfel','Orange'];
			var regal2 = ['Birnen','Joghurt','Sahne'];
			var grosserKuehlschrank = [regal0, regal1, regal2];
			
			//Wir betrachten den grossen Kühlschrank
			console.log(grosserKuehlschrank);
				//Einzelarbeit: Wir möchten nun jedes Element aus allen Regalen einmal im Console.log ausgeben. Wie sieht die Schleife aus?
			for (var x = 0; x < grosserKuehlschrank.length; x++){
				for (var y=0; y<grosserKuehlschrank[x].length;y++){
					console.log((grosserKuehlschrank[x])[y]);
				}
			}
			
			//Dann die einfachere Lösung präsentieren
			grosserKuehlschrank.forEach(function(item, index, array) { 
				/*console.log(item); 
				console.log(index);
				console.log(array[index]);*/
				array[index].forEach(function(childrenItem){
					console.log("Im Kühlschrank befindet sich: "+childrenItem);
				});
				}
			);
			
			//Assoziatives Array
			
			let buch = new Array();
				buch[0] = {titel: "Harry Potter", autor: "J.K.R."};
				buch[1] = {titel: "Andor", autor: "J.K.P."};
				buch[2] = {titel: "Blub", autor: "B.E.H."};
				console.log(buch);
				
				//Einzelarbeit Iteration durch dieses Konstrukt. So das jeder Wert einmal aufgeführt wird
				
				//Lösung
				buch.forEach(function(item, index, array){
					console.log(buch[index].titel);
					console.log(buch[index].autor);
				});
				
