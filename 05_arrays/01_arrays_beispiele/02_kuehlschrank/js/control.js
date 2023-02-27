//Dieser Befehl ist im Kapitel 03_DOM erklärt
let kuehlschrank = document.querySelector("#kuehlschrank");

//Zwei Fächer im Kühlschrank mit Inhalt
let gemueseFach = ["Tomaten", "Gurken", "Zucchini", "Kartoffeln"];
let kaeseFach = ["Gouda", "Edamer", "Brie", "Cheddar"];

//Beispiel für ein assoziatives Array
//Das assoziative Array besitzt so genannte "keys" und "values".
//In diesem Fall sind die Keys die Namen der Fächer und die Values sind die Arrays mit den Lebensmitteln.
//Die Lebensmittel sind auch als Array abgelegt
//So kann eine Art von Ordung im Code entstehen.
//Wir verwenden für diese Ordnung oft JSON oder Objekte und keine assoziativen Arrays. 
//Wichtig ist, dass der Begriff klar ist und für was sie gebraucht werden.
let kuehlschrankInhalt = {
    'Gemüsefach': gemueseFach,
    'Käsefach': kaeseFach
};



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





