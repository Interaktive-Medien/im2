//Dieser Befehl ist im Kapitel 03_DOM erklärt
let einkaufsListe = document.querySelector("#einkaufsListe");

//Details dazu in Kapite 05_Arrays
let inhaltEinkaufsliste = ["Brot", "Butter", "Wasser", "Kaffee"];
let ergaenzung = ["Milch", "Eier", "Käse", "Schinken"];

//Es soll eine Schleife erstellt werden, welche die "ergaenzung" zur "inhaltEinkaufsliste" hinzufügt.


// Hier die Schleife programmieren



//Hier werden die Daten im DOM angezeigt
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
