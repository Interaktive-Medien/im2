//Dieser Befehl ist im Kapitel 03_DOM erklärt
let einkaufsListe = document.querySelector("#einkaufsListe");

//Details dazu in Kapite 05_Arrays
let inhaltEinkaufsliste = ["Brot", "Butter", "Wasser", "Kaffee"];


//Es gibt zwei Möglichkeiten ein Array, Objekt, etc. zu durchlaufen.
//1. for Schleife
//2. forEach Schleife

//zusätzlich gibt es noch die while Schlaufe, diese kann zu Endlosschleifen führen, daher wird diese nicht empfohlen.
//ein einfaches Beispiel einer While Schlaufe gibt es in Beispiel 03_while_schleife


//1. for Schleife
//Bei dieser Schleife nutzen wir einen Zähler. Dieser Zähler wird in der Schleife erhöht.
//Die Schleife wird solange ausgeführt, bis der Zähler die Länge des Arrays erreicht hat.
//Somit haben wir die volle Kontrolle über die Schleife.
//inhaltEinkaufsliste.length gibt die Länge des Arrays zurück.
let titleFor = document.createElement("h2");
titleFor.textContent = "for Schleife";
einkaufsListe.appendChild(titleFor);
for (let i = 0; i < inhaltEinkaufsliste.length; i++) {
    //erstelle ein listen element
    let li = document.createElement("li");
    //füge den text in das li element
    li.textContent = inhaltEinkaufsliste[i];
    //füge das li element in die ul
    einkaufsListe.appendChild(li);
}

//2. forEach Schleife
//Bei dieser Schleife nutzen wir keine Zähler. Die Schleife wird für jedes Element im Array ausgeführt.
//Die Schleife wird solange ausgeführt, bis das Array durchlaufen wurde.
//Hier verlassen wir uns auf die Funktion forEach. Diese Funktion ist Teil des Arrays.
let titleforEach = document.createElement("h2");
titleforEach.textContent = "forEach Schleife";
einkaufsListe.appendChild(titleforEach);
inhaltEinkaufsliste.forEach(element => {
    //erstelle ein listen element
    let li = document.createElement("li");
    //füge den text in das li element
    li.textContent = element;
    //füge das li element in die ul
    einkaufsListe.appendChild(li);    
});



//Das Ergebnis ist bei beiden Varianten das Selbe.
