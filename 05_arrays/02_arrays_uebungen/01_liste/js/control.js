//Dieser Befehl ist im Kapitel 03_DOM erklärt
let einkaufsListe = document.querySelector("#einkaufsListe");

//Erstellen eines leeren Arrays
let inhaltEinkaufsliste = ["Milch", "Brot", "Eier", "Käse", "Wasser", "Kaffee", "Kekse"];


//Diese Schleife ist Bestandteil von Kapitel 06_schleifen. Diese wird genutzt, dass im DOM Inhalte angezeigt werden.
inhaltEinkaufsliste.forEach(element => {
    //erstelle ein listen element
    let li = document.createElement("li");
    //füge den text in das li element
    li.textContent = element;
    //füge das li element in die ul
    einkaufsListe.appendChild(li);    
});




