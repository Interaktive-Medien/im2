var slideIndex = 1;

fetch('extern/images.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      load_and_show(data);
    })
    .catch(function(error){
      console.log("Error: " + error.message);
    })

function load_and_show(images)
  {
    let image_div_element = document.createElement('div');
    images.forEach(element => {
      image_div_element.innerHTML += '<div class="mySlides fade"><div class="image_id">' + element.img_id + '</div><div class="image_title">' + element.title + '</div><img src=' + element.source + '><div class="image_caption">' + element.caption + '</div>';
      document.getElementById("container").appendChild(image_div_element);
    });
  showSlides(slideIndex);
  }

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides fade");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
  slides[slideIndex-1].style.display = "block";  
}
