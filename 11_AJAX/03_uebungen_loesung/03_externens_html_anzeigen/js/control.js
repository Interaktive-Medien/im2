/*  AJAX | Lösung der Übung 3 | 03_externes_html_anzeigen
/* 1. Laden Sie den Inhalt aus der Datei 'extern/html_kanton1.txt' mit Hilfe der fetch()-API
/* 2. Geben Sie den geladenen Inhalt als innerHTML in dem HTML-Element mit der ID 'content' aus.
/* ************************************ */

// 1.
  fetch('extern/html_kanton1.txt')
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      // Ausgabe als HTML in in das HTML-Element mit der id "content"
// 2.
      let content = document.querySelector('#content');
      content.innerHTML = data;
    })
    .catch(function(error) {
      console.log('Error: ' + error.message);
    });
