// Programmiere ein Skript, das jeweils in der Sprache deines Browsers «Hallo Welt»
// respektive «Hello World» ausgibt.

// definiere die Variable spracheuage über die aktuelle Browsersprache
// stelle mit slice(0.2) sicher, dass nur die ersten zwei Buchstaben der Spracheinstellung in der Variable gespeichert werden
// -> aus de-CH wird de für Deutsch
let sprache = window.navigator.spracheuage.slice(0, 2);

// Prüfe verschiedene Sprachparameter und gib anschliessend das jeweilige Resultat in der Konsole aus
if(sprache == 'de'){

  console.log('Hallo Welt');

} else if (sprache == 'fr') {

  console.log('Bonjour tout le monde');

} else if (sprache == 'es') {

  console.log('Hola, Mundo');

} else {

  console.log('Hello, World');
}
