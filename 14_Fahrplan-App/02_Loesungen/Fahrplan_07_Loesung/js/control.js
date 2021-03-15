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

  // console.log(meinInput);

  fetch("https://transport.opendata.ch/v1/locations?type='station'&query='" + meinInput)

  .then((response) => {

    return response.json();
  })
  .then((data) => {

    let stationen = data.stations

    zeichneDropdownVon(stationen);

  })
  // Nur wenn etwas nicht funktioniert hat ...
  .catch(function(error) {
    // ... wird eine Fehlermeldung ausgegeben.
    console.log('Error: ' + error.message);
  });

}

function zeichneDropdownVon(stationen){

  console.log(stationen);

  document.querySelector('#dropdown-von').innerHTML = "";

  stationen.forEach(function(station) {

    var listelement = document.createElement('li');
    listelement.innerHTML = station.name;
    listelement.classList.add("dropdown-von");

    document.querySelector('#dropdown-von').appendChild(listelement);

  });

  addKlickListenerVon();

}

function addKlickListenerVon() {

  document.querySelectorAll('.dropdown-von')
  .forEach(station => {
    station.addEventListener('click', function() {

      document.querySelector('#input-von').value = this.innerHTML;
      document.querySelector('#dropdown-von').innerHTML = "";

    })

  });

}

// Gleiche Funktionen fürs Dropdown bei Input-Nach
// Gleiche Funktionen fürs Dropdown bei Input-Nach
// Gleiche Funktionen fürs Dropdown bei Input-Nach
// Gleiche Funktionen fürs Dropdown bei Input-Nach
// Gleiche Funktionen fürs Dropdown bei Input-Nach

function fetchStationenNach(meinInput){

  // Do the fetch
  fetch("https://transport.opendata.ch/v1/locations?type='station'&query='" + meinInput)

  .then((response) => {

    return response.json();
  })
  .then((data) => {

    // console.log(data);

    let stationen = data.stations

    // console.log(stationen);

    zeichneDropdownNach(stationen);

  })
  // Nur wenn etwas nicht funktioniert hat ...
  .catch(function(error) {
    // ... wird eine Fehlermeldung ausgegeben.
    console.log('Error: ' + error.message);
  });

}

function zeichneDropdownNach(stationen){

  document.querySelector('#dropdown-nach').innerHTML = "";

  // Erstelle ein Dropdown bestehend aus List-Elementen aus allen ge-fetcheten Elementen
  stationen.forEach(function(station) {

    var listelement = document.createElement('li');
    listelement.innerHTML = station.name;
    listelement.id = station.id;
    listelement.classList.add("dropdown-nach");

    document.querySelector('#dropdown-nach').appendChild(listelement);

  });

  addKlickListenerNach();

}

function addKlickListenerNach() {

  document.querySelectorAll('.dropdown-nach')
  .forEach(station => {
    station.addEventListener('click', function() {
      
      // clear the list on click and write innerHTML to input field
      document.querySelector('#input-nach').value = this.innerHTML;
      document.querySelector('#dropdown-nach').innerHTML = "";

    })

  });

}
