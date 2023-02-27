let demo = document.querySelector('#demo');

let password = '';

while (password.length < 8) {
    password = prompt('Bitte geben Sie das Passwort ein, dass mindestens 8 Zeichen besitzt:');
}   

demo.innerHTML = 'Danke für das gültige Passwort';

//use case while


