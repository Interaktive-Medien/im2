// Vorgegeben sind verschiedene HTML Elemente / Layers.
// Programmiere ein Skript so, dass bei jedem Klick auf ein Element,
// dessen Tag-Name (h1, p, b …) und dessen ID in der Konsole ausgegeben wird.

//queryselector direkt mit dem eventlistener verbinden
document.querySelector("#sectionWrapper").addEventListener("click", function(ereignis) {

    // das ereignis (click) als Parameter (Objekt) in der Funktion  mitnehmen
    // ereignis in der Konsole anzeigen und untersuchen
    console.log(ereignis);

    // ereignis.target.tagName gibt den Tag (h1, p ...) des Ziels (target) des vorangehenden click Events aus
    // ereignis.target.id gibt die id dessen aus
    console.log("Gelickt auf " + ereignis.target.tagName + " mit id " + ereignis.target.id)

});
