  fetch('extern/person1.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Aufruf der person_anzeige() -Funktion, die weiter unten definiert ist.
      // Die Funktion erwartet als Parameter ein JS-Objekt.
      // Die empfangegen JSON-Daten werden von JS direkt in ein Objekt umgewandelt.
      // Wir geben der Funktion data als Parameter mit
      person_anzeigen(data);
    })
    .catch(function(error) {
      console.log('Error: ' + error.message);
    });

    // Die Funktion person_anzeigen() ist aus der Datei
    //    10_js_objekte/01_beispiele/07_funktionen_nutzen/js/script.js
    //    kopiert.
    function person_anzeigen(person_param){
    // Der Funktionsparameter "kanton_param" enthält jetzt das übergebene Objekt (hier: "person1")

    // HTML-Struktur innerhalb von JS erzeugen
      let anzeige = document.createElement('ul');
      let personen_anrede = document.createElement('li');
      anzeige.appendChild(personen_anrede);
      let personen_name = document.createElement('li');
      anzeige.appendChild(personen_name);
      let personen_alter = document.createElement('li');
      anzeige.appendChild(personen_alter);
      let person_interessen = document.createElement('li');
      anzeige.appendChild(person_interessen);

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

      // HTML-Elemente aus JS in das HTML-Element mit der id="container" schreiben.
      let html_container = document.querySelector('#container');
      html_container.appendChild(anzeige);
    }
