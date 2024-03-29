//Dieser Befehl ist im Kapitel 03_DOM erklärt
let kuehlschrank = document.querySelector("#kuehlschrank");

//Details dazu in Kapite 05_Arrays
let gemueseFach = ["Tomaten", "Gurken", "Zucchini", "Paprika"];
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

    //lösche jedes zweite Element
    for(var i = 0; i < fachInhalt.length; i++) {
        fachInhalt.splice(i+1,1);
    } 


    //durchlaufe das Array
    fachInhalt.forEach(function (element) {
        let text = document.createElement("p");
        text.innerHTML = element;
        kuehlschrank.appendChild(text);
    });
}



