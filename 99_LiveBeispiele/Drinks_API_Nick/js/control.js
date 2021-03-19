console.log("Hello World");

// mit fetch() das Laden einer externen Datei starten.
// Als Parameter benötigt fetch() den Pfad zur externen Datei.
// 1.
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
// fetch() erwartet als esten Promise eine Antwort (response)
.then((response) => {
  // Definieren, welches Format die Antwort hat (wichtig für den nächsten Teil)
  // hier text()
  // 2.
  return response.json();
})
// als zweiten Promise erwatet fetch() die Daten
.then((data) => {
  // ... wird sie weiterverarbeitet (hier: Ausgabe in die Konsole)
  // 3.
  console.log(data.drinks[0]);

  let daten = data.drinks[0];

  document.getElementById("drink").innerHTML = daten.strDrink;
  document.getElementById("zutat").innerHTML = daten.strIngredient1;
  document.getElementById("zubereitung").innerHTML = daten.strInstructionsDE;
  document.getElementById("bild").src = daten.strDrinkThumb;
})
// Nur wenn etwas nicht funktioniert hat ...
.catch(function(error) {
  // ... wird eine Fehlermeldung ausgegeben.
  console.log('Error: ' + error.message);
});
