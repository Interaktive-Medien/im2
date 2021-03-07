let person1 = {
  alter: 42,
  anrede: 'Herr',
  name: {
    vorname: 'Urs',
    nachname: 'Thöny'
  },
  interessen: ['Film', 'Fahrrad fahren']
};

let person2 = {
  name: {
    vorname: 'Alina',
    nachname: 'Weisser'
  },
  anrede: 'Frau',
  alter: 24,
  interessen: ['Musik', 'Ski fahren', 'surfen', 'HTML/CSS']
};

// Funktionsaufruf um mit einem person-Objekt eine HTML-Struktur zu erzeugen und zurückzugeben
function person_anzeigen(person){
// HTML-Struktur innerhalb von JS erzeugen
// HTML-Struktur existieren nur in JS und werden noch nicht im Browser angezeigt.
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
  for(let i = 0; i < person.interessen.length; i++){
    let interessen_listenpunkt = document.createElement('li');
    interessen_listenpunkt.textContent = person.interessen[i];
    interessen_liste.appendChild(interessen_listenpunkt);
  }

// Informationen in HTML-Elemente schreiben
// HTML-Elemente existieren nur in JS und werden noch nicht im Browser angezeigt.
  personen_anrede.textContent = "Anrede: " + person.anrede;
  personen_name.textContent = "Name: " + person.name.vorname + " " + person.name.nachname;
  personen_alter.textContent = "Alter: " + person.alter;
  person_interessen.textContent = "Interessen: ";
  person_interessen.appendChild(interessen_liste);

  // HTML-Elemente aus JS in das HTML-Element mit der id="container" schreiben.
  let html_container = document.querySelector('#container');
  // "anzeige" als Kindelement in "html_container" schreiben
  // -> Anzeige im Browser
  html_container.appendChild(anzeige);
// Funktionsende
}

// Funktionsaufruf mit "person1"
person_anzeigen(person1);
// Funktionsaufruf mit "person2"
person_anzeigen(person2);
