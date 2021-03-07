// In Übung 03.04 haben wir gelernt, wie Klassen mit JavaScript hinzugefügt werden können.
// Programmiere in dieser Aufgabe den Button so, dass auf Knopfdruck der Koch erscheint
// und bei erneutem Drücken wieder verschwindet.

// der Button wird über querySelector(#switch) in einer Variable gespeichert
let button = document.querySelector("#switch")

// einen Event-Listener einrichten, der hört, falls der Button gedrückt wird
button.addEventListener("click", function(){

  // unseren Koch als Variable speichern
  let koch = document.querySelector("#koch");

  //die Klasse .hidden entweder hinzufügen oder entfernen
  koch.classList.toggle("hidden");

});
