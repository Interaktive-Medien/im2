let button = document.querySelector("#button");
let button2 = document.querySelector("#button2");
let title = document.querySelector("#title");

button.addEventListener("click", function(){

  // alert('Button Clicked!')
  // button.innerHTML = 'Button Clicked!'
  title.innerHTML = 'Der Button wurde gedrückt!'

});

button2.addEventListener("mouseover", function(){

  title.innerHTML = 'Die Maus befindet sich auf dem Button'

});

button2.addEventListener("mouseleave", function(){

  title.innerHTML = 'Die Maus hat den Button verlassen'

});
