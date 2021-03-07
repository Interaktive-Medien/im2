// In 02.02.02 Übersetzer eingebaut

// Attribut herausfinden
let sprache = document.querySelector("html").getAttribute("sprache")

// Bedingungen prüfen und Resultat in der Konsole ausgeben
if (sprache == 'fr') {

  document.querySelector("#ausgabe").innerHTML = 'Bonjour tout le monde';

} else if (sprache == 'es') {

  document.querySelector("#ausgabe").innerHTML = 'Hola, Mundo';

} else if (sprache == 'de') {

  document.querySelector("#ausgabe").innerHTML = 'Grüezi';

} else {

  document.querySelector("#ausgabe").innerHTML = 'Hello, World';
}
