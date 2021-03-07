// ist in dieser Form wohl zu schwierig für den Anfang
// Überlegung, ob diese Übung am Schluss gemacht werden könnte

// Formel Umwandlung Celsius / Fahrenheit nachschauen:
// https://www.mathsisfun.com/temperature-conversion.html

// URL-Parameter lesen
let queryString = window.location.search;
console.log(queryString); // ?temperatur=15

// URL Parameter in einzelne Teile auftrennen
let urlParameter = new URLSearchParams(queryString);
let celsius = urlParameter.get('temperatur')
console.log(celsius);

// C nach F
let celsiusInF = (celsius * 9) / 5 + 32;

// Ausgeben
document.querySelector("#ausgabe").innerHTML = celsius + '°C ist ' + celsiusInF + '°F';
