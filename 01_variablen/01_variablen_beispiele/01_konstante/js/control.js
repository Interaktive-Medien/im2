// zeige, dass die Inhalte von Variablen verändert werden können
let meinDrink = 'orangensaft';
meinDrink = 'tequila sunrise'
console.log(meinDrink);

// zeige, dass die Inhalte von Konstanten  nicht verändert werden können.
const WOCHENTAGE = 7;
WOCHENTAGE = 8;    // gibt eine Fehlermeldung aus und das Skript wird abgebrochen
console.log(WOCHENTAGE);
