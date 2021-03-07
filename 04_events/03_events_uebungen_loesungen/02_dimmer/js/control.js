// Programmiere einen Dimmer, der je nach Position des Sliders 1-5 Glühbirnen einblendet.
// Zeige den aktuellen Wert / die aktuelle Position des Sliders dabei unterhalb der Glühbirnen an.

  // Definiere Variablen aus den HTML Elementen, mit denen du arbeiten wirst
  let dimmer = document.querySelector("#dimmer");
  let display = document.querySelector("#display");
  let lampe = document.querySelector("#lampe");

  // Setze den Dimmer beim Laden auf einen initialen Wert, den du im HTML definierst
  // Diese verknüpfung machst du über die Eigenschaft dimmer.value
  display.innerHTML = dimmer.value;
  lampe.innerHTML = '💡';

  // ein Event-Listener, der mittels dem input Event triggert,
  // falls der Slider bewegt wird
  document.querySelector("#dimmer").addEventListener("input", function(){

    // zur Prüfung jedes Mal in der Konsole ausgeben, sobald der Dimmer bewegt wurde.
    console.log("Der Dimmer wurde bewegt!");

    // den aktuellen Wert des Sliders aufs 'display' im HTML übertragen
    display.innerHTML = dimmer.value;

    // mittels If-Else Bedingungen je nach Position (Wert) des Sliders
    // eine entsprechende Anzahl Lampen anzeigen
    if (dimmer.value <= 10){

      // entsprechende Lampe im HTML anzeigen
      lampe.innerHTML = '💡';

    } else if (dimmer.value > 10 && dimmer.value < 20){

      lampe.innerHTML = '💡💡';

    } else if (dimmer.value >= 20 && dimmer.value < 30) {

      lampe.innerHTML = '💡💡💡';

    } else if (dimmer.value >= 30 && dimmer.value < 40) {

      lampe.innerHTML = '💡💡💡💡';

    } else {

      lampe.innerHTML = '💡💡💡💡💡';

    }

  });
