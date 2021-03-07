
let bus1 = {
  liniennummer : 6,
  kurzbeschreibung : "Bahnhofplatz – City West",
  haltestellen : [
    "Bahnhofplatz",
    "Post 1",
    "Benerpark",
    "Rätusstrasse",
    "Boletta",
    "Salvatorenstrasse",
    "City West",
    "Medienhaus",
    "Sommeraustr. Rossboden",
    "Rheinfels",
    "Kleinbruggen"
  ]
};

let bus2 ={
  liniennummer : 9,
  kurzbeschreibung : "Bahnhofplatz – Meiersboden",
  haltestellen : [
    "Bahnhofplatz",
    "Alexanderplatz",
    "Quader Center",
    "Reichsgasse",
    "Planaterrastrasse",
    "Hof",
    "Turnhalle Sand",
    "Sandstrasse",
    "Krematorium",
    "Plessurfall",
    "Sassal",
    "Rabiosabrücke",
    "Meiersboden",
    "Bodmer",
    "Malteser",
    "Fontanaplatz",
    "Postplatz"
  ]
};


/*  JS-Objekte | Lösung der Aufgabe 2 | 02_bus_objekt_anzeigen
/*  Ertsellen Sie eine Funktion "busobjekt_in_html_anzeigen()" mit dem Funktionsparameter "bus_parameter",
/*  Die Funktion gibt ein alle Angaben zur Buslinie als HTML zurück.
/*  Wenden Sie die Funktion mit den JS-Objekten an und geben Sie das Ergebnis als Child-Elemente des HTML-Elements mit der id "container" im Brwser aus.
/* ************************************ */

function busobjekt_in_html_anzeigen(bus_parameter){

  let bus_anzeige = document.createElement('div');
  let liniennummer_anzeige = document.createElement('h2');
  liniennummer_anzeige.textContent = bus_parameter.liniennummer;

  let kurzbeschreibung_anzeige = document.createElement('h3');
  kurzbeschreibung_anzeige.textContent = bus_parameter.kurzbeschreibung;

  let haltestellen_liste = document.createElement('ul');
  for(let i = 0; i < bus_parameter.haltestellen.length; i++){
    let haltestelle = document.createElement('li');
    haltestelle.textContent = bus_parameter.haltestellen[i];
    haltestellen_liste.appendChild(haltestelle);
  }

  bus_anzeige.appendChild(liniennummer_anzeige);
  bus_anzeige.appendChild(kurzbeschreibung_anzeige);
  bus_anzeige.appendChild(haltestellen_liste);
  return bus_anzeige;
}
let b1 = busobjekt_in_html_anzeigen(bus1);
let b2 = busobjekt_in_html_anzeigen(bus2);

let html_container = document.querySelector('#container');
html_container.appendChild(b1);
html_container.appendChild(b2);
