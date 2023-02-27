//Dieser Befehl ist im Kapitel 03_DOM erklärt
let kuehlschrank = document.querySelector("#kuehlschrank");

//Details dazu in Kapite 05_Arrays
let gemueseFach = ["Tomaten", "Gurken", "Zucchini", "Kartoffeln"];
let kaeseFach = ["Gouda", "Edamer", "Brie", "Cheddar"];

let kuehlschrankInhalt = {
    'Gemüsefach': gemueseFach,
    'Käsefach': kaeseFach
};



//Hier wird eine verschachtelte Schleife genutzt um alle Elemente anzuzeigen.
for (let fach in kuehlschrankInhalt) { //Hier werden die einzelnen arrays als fach gespeichert, damit sie anschliessend durchlaufen werden können.
    //Generiere einen Titel für das Fach
    let titel = document.createElement("h2")
    titel.innerHTML = fach;
    kuehlschrank.appendChild(titel);

    //hole das Array aus dem Objekt
    //die variable fach enthält den Namen des Faches
    let fachInhalt = kuehlschrankInhalt[fach];
    //durchlaufe das Array
    fachInhalt.forEach(function (element) {
        let text = document.createElement("p");
        text.innerHTML = element;
        kuehlschrank.appendChild(text);
    });
}


//Falls bei diesem Beispiel Fragen auftauchen, schreibt es mir, dann machen wir dazu einen kurzen Input.

