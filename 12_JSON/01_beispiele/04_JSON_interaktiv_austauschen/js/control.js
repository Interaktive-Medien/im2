// Dieses Skript interagiert mit der zugehörigen HTML-Datei.
// Weitere Beschreibungen dazu finden Sie dort. (../index.html)


// Siehe: 11_AJAX/01_beispiele/04_inhalt_interaktiv_austauschen/js/script.js
// Unterschied: Es wird eine andere Funktion ( laden_und_anzeigen(dateiname) ) aufgerufen
  let buttons = document.querySelectorAll('.btn');
  for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
      let aktuellerDateiname = this.getAttribute("data-dateiname");
      laden_und_anzeigen(aktuellerDateiname);
    })
  }

// Die Funktion laden_und_anzeigen() entspricht
//    der Funktion zeige_externen_inhalt()
//    aus: 11_AJAX/01_beispiele/04_inhalt_interaktiv_austauschen/js/script.js
// Unterschied: Die URL des Dateinamens wird anders zusammengesetzt
  function laden_und_anzeigen(dateiname){
    // Der Pfad zur externen Datei wird dem Ordnernamen, dem Parameter "dateiname" und der Extension (!!! hier: .json !!!) zusammengesetzt.
    let  url = "extern/" + dateiname + ".json";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        person_anzeigen(data);
      })
      .catch(function(error) {
        console.log('Error: ' + error.message);
      });
    }

  function person_anzeigen(person_param){
  // HTML-Struktur innerhalb von JS erzeugen
    let person_anzeige = document.createElement('ul');
    let personen_anrede = document.createElement('li');
    person_anzeige.appendChild(personen_anrede);
    let personen_name = document.createElement('li');
    person_anzeige.appendChild(personen_name);
    let personen_alter = document.createElement('li');
    person_anzeige.appendChild(personen_alter);
    let person_interessen = document.createElement('li');
    person_anzeige.appendChild(person_interessen);

  // Informationen sammeln und aufbereiten
    let interessen_liste = document.createElement('ul');
    for(let i = 0; i < person_param.interessen.length; i++){
      let interessen_listenpunkt = document.createElement('li');
      interessen_listenpunkt.textContent = person_param.interessen[i];
      interessen_liste.appendChild(interessen_listenpunkt);
    }

  // Informationen in HTML-Elemente schreiben
    personen_anrede.textContent = "Anrede: " + person_param.anrede;
    personen_name.textContent = "Name: " + person_param.name.vorname + " " + person_param.name.nachname;
    personen_alter.textContent = "Alter: " + person_param.alter;
    person_interessen.textContent = "Interessen: ";
    person_interessen.appendChild(interessen_liste);


// !!!!!!!!
    let html_container = document.querySelector('#anzeige');
// !!!!!!!!
    html_container.innerHTML = "";
    html_container.appendChild(person_anzeige);
  }
