//console.log("blub"); Dies war die Überprüfung, ob die Verknüpfung funktioniert hat
//Das array wird vorbereitet. In dieses werden die einzelnen Inhalte eingefügt
let arrayEinkaufsListe = [];


//Listener der die Funktion aufruft.
document.querySelector("#knopfErgaenzen").addEventListener("click", function() {
  //Aktuelle Ihalte aus dem DOM löschen, damit Platz ist für die ganze Liste
  document.querySelector("#listeZumFuellen").innerHTML = "";
  //Funktion listeFuellen wird aufgerufen
  listeFuellen();
});

//Dies ist die Definition der Funktion listeFuellen()
function listeFuellen(){
  //Überprüfung ob die Funktion aufgerufen wird.
  console.log("Funktion listeFuellen wird ausgeführt");

  // Textfeld  mit id listeErgaenzen auslesen
  let eintragInListe = document.querySelector('#listeErgaenzen').value;

  // array arrayEinkaufsListe ergänzen mit ausgelesenem Wert
  arrayEinkaufsListe.push(eintragInListe);

  console.log(arrayEinkaufsListe);

  // Schleife
  //mit arrayEinkaufsListe.lenght wird herausgelesen, wie viele Elemente innerhalb des Array sind
  for (i = 0; i < arrayEinkaufsListe.length ; i++) {
    //Ort zum befüllen definieren
    let liste = document.querySelector("#listeZumFuellen");
    //ein <li> </li> Element wird erstellt
    var listenElement = document.createElement("LI");
    //das Listenelement wird gefüllt mit einem Wert aus dem Array (Beim ersten Durchlauf der 1. beim zweiten der 2. usw)
    listenElement.innerHTML = arrayEinkaufsListe[i]
    //das gefüllte Element wird im DOM eingefpflegt
    liste.appendChild(listenElement);


  }
  // Schleife Ende
}
