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
// Interessen-Liste in Text umwandeln
let interessen = "";
// Der Inhalt eines jeden Elements im Array interessen des Objekts ...
for(let i = 0; i < person1.interessen.length; i++){
  // ... wird der Variablen interessen mit einem Komma und einem Leerzeichen angehängt.
  interessen = interessen + person1.interessen[i] + ", ";
}

// Informationen in HTML anzeigen
// Anrede-Text in Element mit id="person_anrede" einfügen
document.querySelector('#person_anrede').textContent = "Anrede: " + person1.anrede;
// Namen-Text aus Vor- und Nachname zusammensetzen und in Element mit id="person_name" einfügen
document.querySelector('#person_name').textContent = "Name: " + person1.name.vorname + " " + person1.name.nachname;
// Alter-Zahl als Text in Element mit id="person_alter" einfügen
document.querySelector('#person_alter').textContent = "Alter: " + person1.alter;
// Inhalt der Variablen interesse in Element mit id="person_interessen" einfügen
document.querySelector('#person_interessen').textContent = "Interessen: " + interessen;
