//Dieser Befehl ist im Kapitel 03_DOM erklärt
let einkaufsListe = document.querySelector("#einkaufsListe");

//Erstellen eines leeren Arrays
let inhaltEinkaufsliste = ["Milch", "Brot", "Eier", "Käse", "Wasser", "Kaffee", "Kekse"];

//Löschen von Wasser, Eier und Brot aus dem Array
inhaltEinkaufsliste.splice(4, 1);
inhaltEinkaufsliste.splice(2, 1);
inhaltEinkaufsliste.splice(1, 1);

//Hinzufügen von Tee
inhaltEinkaufsliste.push("Tee");

//Alphabetische Sortierung
inhaltEinkaufsliste.sort();


//Diese Schleife ist Bestandteil von Kapitel 06_schleifen. Diese wird genutzt, dass im DOM Inhalte angezeigt werden.
inhaltEinkaufsliste.forEach(element => {
    //erstelle ein listen element
    let li = document.createElement("li");
    //füge den text in das li element
    li.textContent = element;
    //füge das li element in die ul
    einkaufsListe.appendChild(li);    
});




