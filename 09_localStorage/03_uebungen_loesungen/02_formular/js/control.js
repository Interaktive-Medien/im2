let notizFormular = document.querySelector('#notizFormular');
let notizFeld = document.querySelector('input[name="notiz"]');
let notizen = document.querySelector('#notizen');


// Zusatz Nick: Bereits erstellte Notizen laden
loadNotes();

// Funktion, die allfällig bereits vorhandene Notizen lädt
function loadNotes(){

  // Lade Localstorage, wenn bereits Notizen existieren.
  if (localStorage['notizListe']){

    let stringifyedNotizListe = localStorage.getItem('notizListe');
    let notizListe = JSON.parse(stringifyedNotizListe);

    // Schreibe die geladenen Notizen ins HTML mit Loop
    for (let zaehler = 0; zaehler < notizListe.length; zaehler++) {
      let listenEintrag = document.createElement('li');
      listenEintrag.innerHTML = notizListe[zaehler];
      notizen.appendChild(listenEintrag);
    }

  }

}

// 1.	Erstelle ein Formular mit einer ID und höre auf den Event ‘onsubmit’
notizFormular.addEventListener('submit', formularAbgesendet)

function formularAbgesendet(event) {
  // muss angegeben werden, wenn man nicht will, dass das Formular 'abgesendet' und die Seite neu geladen wird
  event.preventDefault();

  // Mache nichts, wenn das Textfeld leer ist.
  if (notizFeld.value == '')
  return false;

  // Prüfen, ob der Notizen-Eintrag im localStorage existiert, wenn nicht: hinzufügen
  if (!localStorage['notizListe']) {
    localStorage.setItem('notizListe', '[]');
  }

  // 2. Die Event-Funktion soll der Reihe nach folgendes machen:
  // - Array aus dem localStorage holen und parsen
  let stringifyedNotizListe = localStorage.getItem('notizListe');
  let notizListe = JSON.parse(stringifyedNotizListe);

  // - Array mit neuem Eintrag füllen
  notizListe.push(notizFeld.value);

  // (Liste vorher leeren)
  notizen.innerHTML = '';

  // - Array mit einer Schleife in einer Liste ausgeben
  for (let zaehler = 0; zaehler < notizListe.length; zaehler++) {
    let listenEintrag = document.createElement('li');
    listenEintrag.innerHTML = notizListe[zaehler];
    notizen.appendChild(listenEintrag);
  }


  // - Array ‘stringifyen’ und wieder in den localStorage kopieren
  let neueStringifyedNotizListe = JSON.stringify(notizListe);
  localStorage.setItem('notizListe', neueStringifyedNotizListe);

  // - Textfeld leeren
  notizFeld.value = "";
}

// 3. Für Schnelle: Einen Button, um den localStorage komplett zu löschen.
let loescheAlles = document.querySelector('#loescheAlles');
loescheAlles.addEventListener('click', loescheNotizen);
function loescheNotizen() {
  // lösche den gesamten localStorage
  localStorage.clear();

  // lösche die HTML-Liste, damit auch der User sieht, es gibt keine Daten
  notizen.innerHTML = '';
}
