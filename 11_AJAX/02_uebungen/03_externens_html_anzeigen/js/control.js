/*  AJAX | Übung 3 | 03_externes_html_anzeigen
/* 1. Laden Sie den Inhalt aus der Datei 'extern/html_kanton1.txt' mit Hilfe der fetch()-API
/* 2. Geben Sie den geladenen Inhalt als innerHTML in dem HTML-Element mit der ID 'content' aus.
/* ************************************ */

// 1.
  fetch(/* 1. */)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      // Ausgabe als HTML in in das HTML-Element mit der id "content"
// 2.


    })
    .catch(function(error) {
      console.log('Error: ' + error.message);
    });
