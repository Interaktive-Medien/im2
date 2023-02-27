//Dieser Befehl ist im Kapitel 03_DOM erklärt
let einkaufsListe = document.querySelector("#einkaufsListe");

//Details dazu in Kapite 05_Arrays
let inhaltEinkaufsliste = ["Brot", "Butter", "Wasser", "Kaffee"];
let ergaenzung = ["Milch", "Eier", "Käse", "Schinken"];

//Es gibt mehrere Lösungsmöglichkeiten, hier sind drei davon abgebildet, auskommentieren und testen
//Lösungsmöglichkeit 1: 
/*
for (let i = 0; i < ergaenzung.length; i++) {
    inhaltEinkaufsliste.push(ergaenzung[i]);
}   
*/


/*
//Lösungsmöglichkeit 2:
inhaltEinkaufsliste = inhaltEinkaufsliste.concat(ergaenzung);
*/



/*
//Lösungsmöglichkeit 3 for each:
ergaenzung.forEach(element => {
    inhaltEinkaufsliste.push(element);
}
);
*/



//Hier werden die Daten im DOM angezeigt
inhaltEinkaufsliste.forEach(element => {
    //erstelle ein listen element
    let li = document.createElement("li");
    //füge den text in das li element
    li.textContent = element;
    //füge das li element in die ul
    einkaufsListe.appendChild(li);    
});
