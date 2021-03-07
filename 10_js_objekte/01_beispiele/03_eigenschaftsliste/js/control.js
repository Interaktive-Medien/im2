let person1 = {
  alter: 42,
  anrede: 'Herr',
  name: {
    vorname: 'Urs',
    nachname: 'Thöny'
  },
  interessen: ['Film', 'Fahrrad fahren']
};

// Informationen sammeln und aufbereiten
// Interessen-Array in HTML-Liste umwandeln

// neues ul-Element erzeugen und in Variable interessen_liste speichern.
// Die neue Liste existiert nur in JS und wird noch nicht im Browser angezeigt.
let interessen_liste = document.createElement('ul');
// Für jedes Element im Array interessen des Objekts ...
for(let i = 0; i < person1.interessen.length; i++){
  // ... wird ein neues Listen-Element erzeugt, ...
  let interessen_listenpunkt = document.createElement('li');
  // ... der Inhalt des aktuellen Array-Elements als Text in des neue Listen-Element geschreiben und ...
  interessen_listenpunkt.textContent = person1.interessen[i];
  // ... das als nächstes Kind-Element in das erzeugte ul-Element geschrieben.
  interessen_liste.appendChild(interessen_listenpunkt);
}

// Informationen in HTML anzeigen
document.querySelector('#person_anrede').textContent = "Anrede: " + person1.anrede;
document.querySelector('#person_name').textContent = "Name: " + person1.name.vorname + " " + person1.name.nachname;
document.querySelector('#person_alter').textContent = "Alter: " + person1.alter;
// Erläuternder Text in Element mit id="person_interessen" schreiben
document.querySelector('#person_interessen').textContent = "Interessen: ";
// Das ober erstellte ul-Element als nächstes Kind-Element in Element mit id="person_interessen" schreiben.
// -> Anzeige im Browser
document.querySelector('#person_interessen').appendChild(interessen_liste);
