// User geben Getränk und Alter in einem Prompt-Fenster ein.
// Prüfe, ob das entsprechende Getränk im angegeben Alter
// schon gekauft werden darf. Gib das Resultat in der Konsole aus.

// Prüfe folgende Getränke:
// Cola ab 0 Jahren
// Bier ab 16 Jahren
// Schnaps ab 18 Jahren

let drink = prompt("Möchtest du Cola, Bier oder Schnaps kaufen?");
let alter = prompt("Wie alt bist du?");

// prüfe in einer ersten If-Bedingung das Alter
// falls alter unter 16
if (alter < 16){

  //if Verschachtelung zweite Ebene
  if (drink == 'Cola'){

    console.log("Du darfst " + drink + " kaufen.");

  //else Verschachtelung zweite Ebene
  } else {

    console.log("Du bist noch zu jung, um " + drink + " zu kaufen.")

  }

  // falls alter unter 18
} else if (alter < 18){

  //if Verschachtelung zweite Ebene
  if(drink == 'Cola' || drink == 'Bier'){

    console.log("Du darfst " + drink + " kaufen.");

  //else Verschachtelung zweite Ebene
  } else {

    console.log("Du bist noch zu jung, um " + drink + " zu kaufen.")

  }

  // falls alter über oder gleich 18
} else if (alter >= 18) {

  // hier ist keine verschachtelte Bedingung nötig, da man mit 18 alles kaufen darf
  console.log("Du darfst " + drink + " kaufen.");

  // falls keine der oberenen Bedingungen zutrifft
} else {

  console.log("Error. Hast du Unsinn eingegeben?");
};
