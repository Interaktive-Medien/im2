// Programmiere einen Audioplayer, den du über Play / Pause Buttons steuern kannst.
// Zeige jeweils die aktuelle Abspielzeit in Sekunden unterhalb des Players an.

  // neues Audioelement erstellen mit new Audio();
  let audio = new Audio();
  audio.setAttribute('src', 'https://admin.undicht.be/wp-content/uploads/2019/05/kater.mp3');

  // Audio Element in der Konsole ausgeben und untersuchen
  console.log(audio);

  // Speichere den Play Button in einer Variable
  var play = document.querySelector('#play');

  // Höre auf den Klick auf den Play Button
  play.addEventListener('click', function(){

    // Spiele das Audio ab
    audio.play();

  });

  // Speichere den Pause Button in einer Variable
  var pause = document.querySelector('#pause');

  // Höre auf den Klick auf den Pause Button
  pause.addEventListener('click', function(){

    // Pausiere das Audio
    audio.pause();

  });

  // Höre auf den Event "timeupdate", um jeweils die aktuelle Spielzeit anzuzeigen
  // https://www.w3schools.com/tags/av_event_timeupdate.asp
  audio.addEventListener("timeupdate", function() {

    // speichere das HTML Element, wo die Dauer angezeigt werden soll in einer Variable
    let duration = document.querySelector('#duration');

    // speichere
    let seconds = audio.currentTime;

    // mit der Funktion Math.floor wird der aktuelle Sekundenwert abgerundet werden
    seconds = Math.floor(seconds);
    console.log(seconds);

    // Den abgerundeten Wert seconds ins HTML schreiben
    duration.innerHTML = seconds + " Sec."
  });
