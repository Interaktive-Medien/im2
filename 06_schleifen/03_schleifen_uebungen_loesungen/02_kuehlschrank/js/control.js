//Dieser Befehl ist im Kapitel 03_DOM erklärt
let kuehlschrank = document.querySelector("#kuehlschrank");

//Details dazu in Kapite 05_Arrays
let gemueseFach = ["Tomaten", "Gurken", "Zucchini", "Paprika"];
let kaeseFach = ["Gouda", "Edamer", "Brie", "Cheddar"];

let kuehlschrankInhalt = {
    'Gemüsefach': gemueseFach,
    'Käsefach': kaeseFach
};
//Erstelle eine Schleife, die bei beiden Arrays jedes zweite Element löscht
//Tipp: Verwende die Modulo-Operation

//Array für die zu löschenden Elemente
let gemueseEntfernen = [];

//zu löschende Elemente finden
gemueseFach.forEach(function (element, index) {
    if (index % 2 == 1) {
        gemueseEntfernen.push(index);
    }
});
//Array umdrehen, damit die Elemente in der richtigen Reihenfolge gelöscht werden
gemueseEntfernen.reverse();

//Elemente löschen
gemueseEntfernen.forEach(function (index) {
    gemueseFach.splice(index, 1);
});

//Array für die zu löschenden Elemente
let kaeseEntfernen = [];

//zu löschende Elemente finden
kaeseFach.forEach(function (element, index) {
    if (index % 2 == 1) {
        kaeseEntfernen.push(index);
    }
});
//Array umdrehen, damit die Elemente in der richtigen Reihenfolge gelöscht werden
kaeseEntfernen.reverse();

//Elemente löschen
kaeseEntfernen.forEach(function (index) {
    kaeseFach.splice(index, 1);
});


//Falls ihr eine bessere, elegantere, einfachere Lösung gefunden habt, dann schreibt sie uns!






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



