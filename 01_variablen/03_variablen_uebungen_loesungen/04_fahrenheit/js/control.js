// Du möchtest deinen amerikanischen Freunden vom ausserordentlich warmen Winter
// hier in der Schweiz erzählen. Programmiere ein Skript, das dir Grad Celsius
// in Grad Fahrenheit umrechnet.

// Formel Umwandlung Celsius / Fahrenheit:
// https://www.mathsisfun.com/temperature-conversion.html

// definieren der Anfangstemperatur in °Celsius
let celsius = 15;

// definieren der Variable celsiusInFahrenheit
// berechnen des Fahrenheit-Werts mittels der Formel von
// https://www.mathsisfun.com/temperature-conversion.html
let celsiusInF = (celsius * 9) / 5 + 32;

// Ausgabe der Umrechnung in der Konsole
console.log(celsius + '°C ist ' + celsiusInF + '°F');

// definieren der Anfangstemperatur in °Fahrenheit
let fahrenheit = 20;

// definieren der Variable fahrenheitInCelsius
// berechnen des Celsius-Werts mittels der Formel von
// https://www.mathsisfun.com/temperature-conversion.html
let fahrenheitInC = ((fahrenheit - 32 ) * 5 ) / 9;

// Ausgabe der Umrechnung in der Konsole
console.log(fahrenheit + '°F ist ' + fahrenheitInC + '°C');
