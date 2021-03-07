// Programmiere ein Skript, das dir je nach Punktzahl (0-100) jeweils
// die entsprechende Note (3-6) in der Konsole ausgibt. Verwende für die
// Lösung dieser Aufgabe eine If / Else Bedingung.

// Variable Punktzahl definieren
let punktzahl = 65;

// Punktzahl absteigend prüfen und Resultat in der Konsole ausgeben
    if (punktzahl > 90) {

        console.log('Du hast eine ' + 6);

    } else if (punktzahl > 80) {

        console.log('Du hast eine ' + 5.5);

    } else if (punktzahl > 70) {

        console.log('Du hast eine ' + 5);

    } else if (punktzahl > 65) {

        console.log('Du hast eine ' + 4.5);

    } else if (punktzahl > 60) {

        console.log('Du hast eine ' + 4);

    } else {

        console.log('Du bist ungenügend!');
    }
