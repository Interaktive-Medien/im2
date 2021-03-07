// Programmiere ein Skript, das dir ausrechnet, in welchem Jahr du wie alt sein wirst.
// Verwende Variablen für dein Geburtsjahr und das aktuelle Jahr.
// Gib dein Resultat in der Konsole in einem Satz aus.

// Beispiellösung:
// Im Jahr 2020 werde ich 23 oder 24 Jahre alt sein.

// definieren der Variable geburtsjahr
let geburtsjahr = 1996;

// definieren der Variable Jahr "heute"
let heute  = 2020;

// deklarieren der Variable alter
let alter;

// Berechnung des Alters mit der Formel heute - geburtsjahr (Bsp. 2020 - 1996 = 24)
alter  = heute - geburtsjahr;

// Die obere Formel geht davon aus, dass du dieses Jahr schon Geburtstag hattest
// Wenn du noch nicht Geburtstag hattest, musst du aber ein Jahr vom Resultat abziehen

// Dafür deklarieren wir eine neue Variable alterklein
let alterklein;

// und ziehen ein Jahr vom oben berechnet Alter ab
alterklein = alter - 1

// Ausgabe der Variable alter und alterklein mittels console.log
// Strings müssen immer in Anführungszeichen geschrieben werden
// durch das Pluszeichen werden Strings und Variablen aneinandergereiht
console.log('In ' + heute + ' werde ich entweder ' + alterklein + ' oder ' + alter + ' Jahre alt sein.');
