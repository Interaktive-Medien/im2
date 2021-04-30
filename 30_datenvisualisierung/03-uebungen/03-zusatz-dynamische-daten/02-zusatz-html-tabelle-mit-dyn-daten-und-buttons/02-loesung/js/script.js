/* Eigene Skripte für die Datenvisualisierung */
let buttons = document.querySelectorAll('.btn');
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
// 2.
    let aktuellerDateiname = this.getAttribute("data-dateiname");
    laden_und_anzeigen(aktuellerDateiname);
  })
}

/* Tabelle nach Klasse .chart-table selektieren und in Variable speichern */
let tabelle = document.querySelector('.chart-table');

function laden_und_anzeigen(dateiname){
  // Der Pfad zur externen Datei wird dem Ordnernamen, dem Parameter "dateiname" und der Extension (!!! hier: .json !!!) zusammengesetzt.
  let  url = "extern/" + dateiname + ".json";
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
		tabelleFuellen(data);
  })
  .catch(function(error) {
    console.log('Error: ' + error.message);
  });
}

function erstelleTabHead(headData){
	let row = tabelle.insertRow(-1);
	for(let prop in headData){
		let cell = document.createElement("th");
    if(prop == "Maenner"){
      cell.innerHTML = prop + ' <img src="./imgs/icon-maennlich.svg" class="icon" />';
    } else if(prop == "Frauen"){
      cell.innerHTML = prop + ' <img src="./imgs/icon-weiblich.svg" class="icon" />';
    }else {
      cell.innerHTML = prop;
    }
		row.appendChild(cell);
	}
}

function reiheHinzufuegen(rowData) {
	let row = tabelle.insertRow(-1);
	for(let prop in rowData){
		let cell = row.insertCell(-1);
		console.log(rowData[prop]);
		if((typeof rowData[prop]) == "string"){
			cell.innerHTML = rowData[prop];
		} else if ((typeof rowData[prop]) == "number"){
			cell.innerHTML = rowData[prop] + "<div class='bar' style='width: " + rowData[prop] / 52.5 * 100 + "%;'></div>"
		}
	}
}

/* Füllt die Tabelle */
function tabelleFuellen(data){
  tabelle.innerHTML = "";
	for (let i = 0; i < data.length; i++){
		if(i==0){
			erstelleTabHead(data[i]);
		}
		reiheHinzufuegen(data[i]);
	};
}
