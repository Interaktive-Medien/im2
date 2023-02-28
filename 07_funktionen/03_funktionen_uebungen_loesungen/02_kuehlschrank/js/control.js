//Dieser Befehl ist im Kapitel 03_DOM erklärt
let kuehlschrank = document.querySelector("#kuehlschrank");
let sortieren = document.querySelector("#sortieren");

//Zwei Fächer im Kühlschrank mit Inhalt
let gemueseFach = ["Tomaten", "Gurken", "Zucchini", "Kartoffeln"];
let kaeseFach = ["Gouda", "Edamer", "Brie", "Cheddar"];


let kuehlschrankInhalt = {
    'Gemüsefach': gemueseFach,
    'Käsefach': kaeseFach
};
//Aufruf der Funktion zum Anzeigen der Elemente im Kühlschrank
zeigeKuehlschrank()

sortieren.addEventListener("click", function(){
    //Sortiert die Elemente im Käsefach alphabetisch
    kaeseFach.sort();
    //Sortiert die Elemente im Gemüsefach alphabetisch
    gemueseFach.sort();
    //Aufruf der Funktion zum Anzeigen der Elemente im Kühlschrank
    zeigeKuehlschrank()
});


//AUFGABE//
//Erweitere die Funktion so, dass jedes Element einen Löschbutton bekommt.
//Jeder Löschenbutton soll ein Eventlistener haben, der das Element aus dem Array entfernt.


function zeigeKuehlschrank(){
//lösche den Inhalt des Kühlschranks
kuehlschrank.innerHTML = "";
for (let fach in kuehlschrankInhalt) {
    let titel = document.createElement("h2")
    titel.innerHTML = fach;
    kuehlschrank.appendChild(titel);
    let fachInhalt = kuehlschrankInhalt[fach];
    fachInhalt.forEach(function (element) {
        let text = document.createElement("p");
        text.innerHTML = element;
        //LÖSUNG//
        let loeschen = document.createElement("button");
        loeschen.innerHTML = "Löschen";
        loeschen.addEventListener("click", function(){
            let index = fachInhalt.indexOf(element);
            fachInhalt.splice(index, 1);
            zeigeKuehlschrank();
        });
        text.appendChild(loeschen);
        //LÖSUNG//
        kuehlschrank.appendChild(text);
    });
}
};





