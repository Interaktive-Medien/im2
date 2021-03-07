			//Grundaufbau - Knopf einfügen und dann die Funktion bauen
		function HalloWelt(){
			console.log("Hallo Welt");
			gutGemacht();
		}
		
		//Einzelarbeit - drei funktionen bauen, die sich aufrufen
		function gutGemacht(){
			console.log("Gut gemacht")
			fertig();
		}
		function fertig(){
			console.log("Fertig")
			
		}
		
		/*Beispiel um Variabeln zu übergeben
			
		function HalloWelt(){
			console.log("Hallo Welt");
			var text1 = "Gut gemacht";
			gutGemacht(text1);
		}
		
		//Einzelarbeit - drei funktionen bauen, die sich aufrufen
		function gutGemacht(text){
			console.log(text)
			var text2 = "Fertig";

			fertig(text2);
		}
		function fertig(text){
			console.log(text)
			
		}
			
			*/
		
		
		//Erstelle drei Buttons und bei jedem Button erscheint ein andere Alert. Es muss aber immer die gleiche Funktion aufgerufen werden
			

/*
			<script>
				//Listener bauen
		document.getElementById("zeitButton").addEventListener("click", zeigeDatum);
		
		//passende funktion bauen
		function zeigeDatum() {
		  document.getElementById("datum").innerHTML = Date();
		}
		
		


			</script>
*/