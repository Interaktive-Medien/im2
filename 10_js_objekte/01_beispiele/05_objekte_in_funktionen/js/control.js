let person1 = {
  alter: 42,
  anrede: 'Herr',
  name: {
    vorname: 'Urs',
    nachname: 'Thöny'
  },
  interessen: ['Film', 'Fahrrad fahren']
};

// Funktionsaufruf um mit einem person-Objekt eine HTML-Struktur zu erzeugen und zurückzugeben
// Selbe Funktionsweise, wie bisher ...
// ... mit dem Unterschied, dass die Eigenschaften nicht mehr direkt aus dem Objekt "person1" kommen, ...
// ... sondern das ganze Objekt "person1" der Funktion als Parameter "person_param" übergeben wird.
// Die Eigenschaften werden innerhalb der Funktion direkt dem Funktionsparameter "person_param" entnommen.
// Innerhalb der Funktion überall "person1" durch "person_param" ersetzen.
// Funktionsstart
function person_anzeigen(person_param){
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
  // "person1" durch "person_param" ersetzen.
  for(let i = 0; i < person_param.interessen.length; i++){
    let interessen_listenpunkt = document.createElement('li');
    // "person1" durch "person_param" ersetzen.
    interessen_listenpunkt.textContent = person_param.interessen[i];
    interessen_liste.appendChild(interessen_listenpunkt);
  }

// Informationen in HTML-Elemente schreiben
  // "person1" durch "person_param" ersetzen.
  personen_anrede.textContent = "Anrede: " + person_param.anrede;
  // "person1" durch "person_param" ersetzen.
  personen_name.textContent = "Name: " + person_param.name.vorname + " " + person_param.name.nachname;
  // "person1" durch "person_param" ersetzen.
  personen_alter.textContent = "Alter: " + person_param.alter;
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
