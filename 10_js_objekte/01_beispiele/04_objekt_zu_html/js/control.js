let person1 = {
  alter: 42,
  anrede: 'Herr',
  name: {
    vorname: 'Urs',
    nachname: 'Thöny'
  },
  interessen: ['Film', 'Fahrrad fahren']
};

// HTML-Struktur innerhalb von JS erzeugen
// HTML-Struktur existieren nur in JS und wird noch nicht im Browser angezeigt.

// ungeordnete Liste (ul) als JS-Objelt "anzeige" erstellen
let anzeige = document.createElement('ul');
// Listen-Element (li) als JS-Objelt "personen_anrede" erstellen und ...
let personen_anrede = document.createElement('li');
// ... als erstes Element an "anzeige" anhängen.
anzeige.appendChild(personen_anrede);
// Listen-Element (li) als JS-Objelt "personen_name" erstellen und ...
let personen_name = document.createElement('li');
// ... als erstes Element an "anzeige" anhängen.
anzeige.appendChild(personen_name);
// Listen-Element (li) als JS-Objelt "personen_alter" erstellen und ...
let personen_alter = document.createElement('li');
// ... als erstes Element an "anzeige" anhängen.
anzeige.appendChild(personen_alter);
// Listen-Element (li) als JS-Objelt "person_interessen" erstellen und ...
let person_interessen = document.createElement('li');
// ... als erstes Element an "anzeige" anhängen.
anzeige.appendChild(person_interessen);

// !!! BIS HIER NOCH KEINE ANZEIGE IM BROWSER !!!

// Informationen sammeln und aufbereiten
// neues ul-Element erzeugen und in Variable interessen_liste speichern.
// Die neue Liste existiert nur in JS und wird noch nicht im Browser angezeigt.
let interessen_liste = document.createElement('ul');
for(let i = 0; i < person1.interessen.length; i++){
  let interessen_listenpunkt = document.createElement('li');
  interessen_listenpunkt.textContent = person1.interessen[i];
  interessen_liste.appendChild(interessen_listenpunkt);
}

// Informationen in HTML-Elemente schreiben
// HTML-Elemente existieren nur in JS und werden noch nicht im Browser angezeigt.
// Anrede ins JavaScript-Objekt "personen_anrede" einfügen
personen_anrede.textContent = "Anrede: " + person1.anrede;
// Vor- und Nachname ins JavaScript-Objekt "personen_name" einfügen
personen_name.textContent = "Name: " + person1.name.vorname + " " + person1.name.nachname;
// Alter ins JavaScript-Objekt "personen_alter" einfügen
personen_alter.textContent = "Alter: " + person1.alter;
// Erläuternden Text "Interessen" ins JavaScript-Objekt "person_interessen" einfügen
person_interessen.textContent = "Interessen: ";
// Das ober erstellte JS-Objekt (ul-Element) "interessen_liste" als nächstes Kind-Element ins JavaScript-Objekt "person_interessen" schreiben
person_interessen.appendChild(interessen_liste);

// !!! BIS HIER NOCH KEINE ANZEIGE IM BROWSER !!!

// HTML-Elemente aus JS in das HTML-Element mit der id="container" schreiben.
// HTML-Element mit der id="container" in JS-Variablen "html_container" speichern
let html_container = document.querySelector('#container');
// "anzeige" als Kindelement in "html_container" schreiben
// -> Anzeige im Browser
html_container.appendChild(anzeige);
