// 1. Speichere deinen Name, Nachname und Alter im localStorage
localStorage.setItem('name', 'Tom');
localStorage.setItem('nachname', 'Müller');
localStorage.setItem('alter', 23);

// 2. Untersuche die Webseite im Browser und gehe zum Register ‘Web-Speicher’

// 3. Gib die Daten in der Konsole und in einem Paragraph aus
console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('nachname'));
console.log(localStorage.getItem('alter'));
console.log(localStorage);

let nameParagraph = document.querySelector('#nameParagraph');
nameParagraph.innerHTML = localStorage.getItem('name');

let nachnameParagraph = document.querySelector('#nachnameParagraph');
nachnameParagraph.innerHTML = localStorage.getItem('nachname');

let alterParagraph = document.querySelector('#alterParagraph');
alterParagraph.innerHTML = localStorage.getItem('alter');


// 4. Speichere ein Array ab (nutze dafür JSON.stringify([array]))
let namenArray = ['Paul', 'Peter', 'Christoph', 'Urs'];
let stringifyedNamenArray = JSON.stringify(namenArray);
localStorage.setItem('namenArray', stringifyedNamenArray);

// 5. Gib das Array in der Konsole aus (nutze dafür JSON.parse([string]))
//  let storageNamenArray = localStorage.getItem('namenArray');
let storageNamenArray = localStorage.namenArray;
let parsedNamenArray = JSON.parse(storageNamenArray);

console.log(storageNamenArray);
console.log(parsedNamenArray);
