// Die Funktion in diesem Eventlistener wird ausgeführt,
// sobald alle Inhalte des DOM geladen wurden.
document.addEventListener("DOMContentLoaded", function(event) {

  var inputVon = document.querySelector('#input-von');
  var inputNach = document.querySelector('#input-nach');

  inputVon.addEventListener('input', function (evt) {

    let meinInput = inputVon.value;

    fetchStationenVon(meinInput);

  });

  inputNach.addEventListener('input', function (evt) {

    let meinInput = inputNach.value;

    fetchStationenNach(meinInput);

  });

});

// Funktionen fürs Dropdown bei Input-Von
// Funktionen fürs Dropdown bei Input-Von
// Funktionen fürs Dropdown bei Input-Von
// Funktionen fürs Dropdown bei Input-Von
// Funktionen fürs Dropdown bei Input-Von

function fetchStationenVon(meinInput){

  console.log(meinInput);

}

// Gleiche Funktionen fürs Dropdown bei Input-Nach
// Gleiche Funktionen fürs Dropdown bei Input-Nach
// Gleiche Funktionen fürs Dropdown bei Input-Nach
// Gleiche Funktionen fürs Dropdown bei Input-Nach
// Gleiche Funktionen fürs Dropdown bei Input-Nach

function fetchStationenNach(meinInput){

  console.log(meinInput);

}
