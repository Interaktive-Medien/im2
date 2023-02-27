// Bildarray mit Bildpfaden relativ zur HTML Datei erstellen
let bilder = ['image1', 'image2', 'image3', 'image4' ];

//Eventlistener, wenn auf den Button gedrückt wird
let button = document.querySelector('#button');
button.addEventListener("click", function(){

  // .content DIV jeweils vor dem Funktionsaufruf leeren
  document.querySelector('.content').innerHTML = " ";

  // Funktion aufrufen, die die Bilder einfügt
  bilderEinfuegen();

});

// funktion zum Einfügen der Bilder definieren
function bilderEinfuegen(){

  // Schleife, die Bild für Bild durch den Bildarray loopt
  let index;
  for (index = 0; index < bilder.length; index++) {

    // img Element vorbereiten (Bilderrahmen kaufen)
    let bild = document.createElement("IMG");

    // die src (Quelle) des jeweiligen Bildes angeben (Bild in Bilderrahmen hängen)
    // funktioniert nur, wenn alle Bilder die gleiche Endung haben. Sonst Endung im Array angeben.
    bild.src = 'img/' + bilder[index] + '.jpg';

    // den Ort, wo das Bild aufgehängt werden soll bestimmen
    let content = document.querySelector('.content');

    // Die Breite jedes Bildes zufällig auswählen
    // Math.random erzeugt einen Wert zwischen 0 und 1, den wir mit dem maximalen Wert multiplizieren müssen.
    bild.style.width = Math.random() * 1000 + 'px';

    bild.style.left = Math.random() * 300 + 'px';

    bild.style.top = Math.random() * 200 + 'px';

    // Rotation der Bilder generieren
    // CSS Befehl rotate(45deg) --> darum ungewöhnliche Syntax
    // mit 360 multiplizieren, weil ein Kreis 360 Grad hat, was einer vollständigen Drehung entspricht
    bild.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';

    // das vorbereitete Bild ins HTML einfügen (Bilderrahmen endlich aufhängen)
    content.appendChild(bild);

  };  // Ende der Schleife

}; // Ende der Funktion
