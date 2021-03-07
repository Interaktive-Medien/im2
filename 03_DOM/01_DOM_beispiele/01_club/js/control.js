// Das DOM lesen

let club = document.getElementsByTagName("LI");

console.log(club);

let raum = document.querySelector('.room');

console.log(raum);

let buehne = document.querySelector('#stage');

console.log(buehne);


// ins DOM schreiben
let leute = document.querySelector('#people');

let vladi = document.createElement("li");
vladi.innerHTML = 'Vladimir';
leute.appendChild(vladi);
