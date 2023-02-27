//Dieser Befehl ist im Kapitel 03_DOM erklärt
let kuehlschrank = document.querySelector("#kuehlschrank");

//Zwei Fächer im Kühlschrank mit Inhalt
let gemueseFach = ["Tomaten", "Gurken", "Zucchini", "Kartoffeln"];
let kaeseFach = ["Gouda", "Edamer", "Brie", "Cheddar"];
//Getränkefach wird erstellt
let getraenkeFach = ["Wasser", "Milch", "Orangensaft"];

let kuehlschrankInhalt = {
    'Gemüsefach': gemueseFach,
    'Käsefach': kaeseFach,
    //Getränkefach wird dem Kühlschrank hinzugefügt
    'Getränkefach': getraenkeFach
};

//Aus dem Gemüsefach werden die Gurken entfernt
gemueseFach.splice(1, 1);
//Im Gemüsefach werden die Kartoffeln durch Radieschen ersetzt
gemueseFach.splice(2, 1, "Radieschen");
//Im Käsefach wird ein Appenzeller Käse hinzugefügt
kaeseFach.push("Appenzeller");
//Das Käsefach wird Alphabetisch von Z nach A sortiert
kaeseFach.sort();


//Diese Schleife ist Bestandteil von Kapitel 06_schleifen. Diese wird genutzt, dass im DOM Inhalte angezeigt werden.
for (let fach in kuehlschrankInhalt) {
    let titel = document.createElement("h2")
    titel.innerHTML = fach;
    kuehlschrank.appendChild(titel);
    let fachInhalt = kuehlschrankInhalt[fach];
    fachInhalt.forEach(function (element) {
        let text = document.createElement("p");
        text.innerHTML = element;
        kuehlschrank.appendChild(text);
    });
}





