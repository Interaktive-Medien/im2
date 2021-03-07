// Beispiel Leserichtung zeigen(falsch)

let alter = 21;

if (alter > 16){
  let schnaps = false;

} else if (alter > 18){

  let schnaps = true;

}

console.log(schnaps)

// Beispiel Leserichtung zeigen(richrtig)

let alter = 21;

if (alter > 18){
  let schnaps = true;

} else if (alter > 16){

  let schnaps = false;

}

console.log(schnaps)
