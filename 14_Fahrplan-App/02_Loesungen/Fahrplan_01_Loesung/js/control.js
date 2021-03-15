// Die Funktion in diesem Eventlistener wird ausgeführt,
// sobald alle Inhalte des DOM geladen wurden.
document.addEventListener("DOMContentLoaded", function(event) {

  var inputVon = document.querySelector('#input-von');
  var inputNach = document.querySelector('#input-nach');

  inputVon.addEventListener('input', function (evt) {

    let meinInput = inputVon.value;

    console.log(meinInput);

  });

  inputNach.addEventListener('input', function (evt) {

    let meinInput = inputNach.value;

    console.log(meinInput);

  });

});
