//Diese Befehle sind im Kapitel 03_DOM erklärt
let einkaufsListe = document.querySelector("#einkaufsListe");
let einkaufsListeButton = document.querySelector("#hinzufuegen");
let eingabeListe = document.querySelector("#eingabe");

//Tipp, die beiden Buttons müssen als Variable angelegt werden


//Erstellen eines leeren Arrays
let inhaltEinkaufsliste = ["Brot", "Milch", "Eier"];
zeigeListe();

//Es sollen zwei weitere Buttons hinzugefügt werden. Ein Button soll die ganze Liste löschen.
//Der zweite Button soll das letzte Element der Liste löschen.

















//Funktion, dass der Button geklickt werden kann
einkaufsListeButton.addEventListener("click", function(){
    //rufe die Funktion auf, die den Wert aus dem Inputfeld nimmt
    inhaltEinkaufsliste.push(eingabeListe.value);
    //lösche den Wert aus dem Inputfeld
    eingabeListe.value = "";
    //rufe die Funktion auf, die die Liste anzeigt
    zeigeListe();
});

//Wir haben die Schleife um die Elemente anzuzeigen in eine Funktion gepackt
//So können wir diese Funktion später dann aufrufen, wann wir sie brauchen
//Die Funktion wirt mit zeigeListe() aufgerufen
function zeigeListe() {
//lösche die Liste
einkaufsListe.innerHTML = "";
//Diese Schleife ist Bestandteil von Kapitel 06_schleifen. Diese wird genutzt, dass im DOM Inhalte angezeigt werden.
inhaltEinkaufsliste.forEach(element => {
    //erstelle ein listen element
    let li = document.createElement("li");
    //füge den text in das li element
    li.textContent = element;
    //füge das li element in die ul
    einkaufsListe.appendChild(li);    
});

}


//Warum werden die beiden Funktionen getrennt?
//Wenn die Seite geladen wird, wird die Funktion zeigeListe() aufgerufen.
//So kann der User sehen, was er schon in der Liste hat.
