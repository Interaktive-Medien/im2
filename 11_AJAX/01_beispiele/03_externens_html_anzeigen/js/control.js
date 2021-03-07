fetch('extern/html_text.txt')
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    // Ausgabe als HTML in in das HTML-Element mit der id "content"
    let content = document.querySelector('#content');
    content.innerHTML = data;
  })
  .catch(function(error) {
    console.log('Error: ' + error.message);
  });
