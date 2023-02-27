//Dieser Befehl ist im Kapitel 03_DOM erklärt
let einkaufsListe = document.querySelector("#einkaufsListe");

//Erstellen eines leeren Arrays
let inhaltEinkaufsliste = [];

//Arrays helfen einem, mehrere Werte in einer Variablen zu speichern.
//So können wir Ordnung in unsere Daten bringen.
//Auch können mit Hilfe von Schleifen und Funktionen Arrays einfach bearbeitet und angezeigt werden.

//Inalte zum Array hinzufügen
inhaltEinkaufsliste.push("Milch");
inhaltEinkaufsliste.push("Brot");
inhaltEinkaufsliste.push("Eier");
inhaltEinkaufsliste.push("Käse");
inhaltEinkaufsliste.push("Wasser");
inhaltEinkaufsliste.push("Kaffee");
inhaltEinkaufsliste.push("Kekse");
//Letzes Element aus dem Array entfernen
inhaltEinkaufsliste.pop();
//Erstes Element aus dem Array entfernen
inhaltEinkaufsliste.shift();
//Zweites Element löschen
inhaltEinkaufsliste.splice(1,1);
//Zweites Element ersetzen
inhaltEinkaufsliste.splice(1,1,"Butter");

//Nach all diesen Veränderungen stehen nun folgende Elemente im Array
console.log(inhaltEinkaufsliste);
/*Brot
Butter
Wasser
Kaffee*/



//Diese Schleife ist Bestandteil von Kapitel 06_schleifen. Diese wird genutzt, dass im DOM Inhalte angezeigt werden.
inhaltEinkaufsliste.forEach(element => {
    //erstelle ein listen element
    let li = document.createElement("li");
    //füge den text in das li element
    li.textContent = element;
    //füge das li element in die ul
    einkaufsListe.appendChild(li);    
});




