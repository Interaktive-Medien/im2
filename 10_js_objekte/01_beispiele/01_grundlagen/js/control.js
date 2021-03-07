let person1 = {
  alter: 42,
  anrede: 'Herr',
  name: {
    vorname: 'Urs',
    nachname: 'Thöny'
  },
  interessen: ['Film', 'Fahrrad fahren'],
};

console.log(person1.alter);
console.log(person1.name.vorname);

let gutesBeispiel = {
  ganzzahl : 42,
  fliesskommazahl : 13.37,
  zeichenkette : 'Hallo Welt',
  unterobjekt : {
    vorname : 'Urs',
    nachname : 'Thöny'
  },
  einArray : ['foo', 'bar'],
  undefinierbar : undefined,
  nix : null,
  entwederOder : true
}

/*
let schlechtesBeispiel = {
  ganzzahl : "42",
  fliesskommazahl : 13,37,
  zeichenkette : 'Hallo Welt'
  unterobjekt : (
    "vorname" : "'Urs'",
    "nachname" : Thöny
  ),
  einArray : {'foo', 'bar'},
  undefinierbar : "undefined",
  nix : NULL,
  entwederOder : FALSE
}
*/
