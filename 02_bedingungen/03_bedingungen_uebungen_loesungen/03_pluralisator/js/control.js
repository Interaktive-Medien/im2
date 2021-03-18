// Im Englischen werden die meisten Pluralformen gebildet, indem ein 's' an das
// jeweilige Nomen angehängt wird (cat -> cats).
// Entwickle mit den Variablen tier und zahl ein Skript,
// das englische Tiernomen automatisch ins Plural setzt,
// wenn die Anzahl (zahl) grösser als 1 ist.
// Entwickle mit den Variablen animal und number ein Skript,
// das englische Tiernomen automatisch ins Plural setzt
// wenn die Anzahl (number) grösser als 1 ist.
// Berücksichtige, dass jemand aus Jux auch 0 Tiere oder 'abc' Tiere eingeben könnte.
// Gib die Lösung als Satz in der Konsole aus.
//
// Baue in dein Skript folgende Ausnahmen ein:
// Mouse -> Mice, Sheep -> Sheep, Goose -> Geese


// Variablen definieren
let animal = 'cat';
let number = '10';

// Bedingungen prüfen

// prüfen, ob überhaupt Tiere vorhanden ODER ob eine Zahl eingegeben wurde (isNaN = is not a number)
if (number < 1 || isNaN(number) == true ){

  // falls keine Anzahl angegeben wurde, die Frage ausgeben, wo die Tiere sind.
  console.log("Where is the " + animal + "?");

  // prüfen, ob es sich um genau 1 Tier oder um ein Schaf handelt
} else if (number == 1 || animal == 'sheep'){

  // falls ja, zahl und singular unverändert ausgeben
  console.log(number + ' ' + animal);

  // prüfen, ob es sich um mehrere Tiere UND um Mouse ODER Goose handelt
} else if (number > 1 && animal == 'mouse' || number > 1 && animal == 'goose') {

  // falls ja, START verschachtelte If-Bedingung, ob Mouse ODER Goose eingegeben wurde.
  if (animal == 'mouse'){

    // unregelmässiges Plural ausgeben
    console.log(number + ' mice');

  } else if (animal == 'goose'){

    // unregelmässiges Plural ausgeben
    console.log(number + ' geese')

  }
  // ENDE verschachtelte If-Bedingung

  // falls es sich um mehrere Tiere handelt
  // goose, sheep und mouse müssen wir hier nicht mehr prüfen, weil diese weiter oben schon geprüft wurden
} else if (number > 1) {

  // regelmässiges Plural ausgeben
  console.log(number + ' ' + animal + 's');


} else {

  console.log('Error!')
  // ein else brauchen wir eigentlich nicht, weil wir alle Möglichkeiten prüfen
  // falls wir aber doch etwas vergessen hätten, wird ein error ausgegeben.

}
