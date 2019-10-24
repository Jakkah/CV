var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}
// Modal de contact.

var contact = document.getElementById("myContact");

// récupération du bouton qui ouvre le modal.
var btn = document.getElementById("contact");

// Récupération de l'élément close position[0].
var close = document.getElementsByClassName("close")[0];

// Fonction : Ouverture du modal sur click.
btn.onclick = function() {
  contact.style.display = "block";
}

// Fermeture du modal après click sur (X).
close.onclick = function() {
  contact.style.display = "none";
}

// Fermeture du modal après un click en-dehors.
window.onclick = function(event) {
  if (event.target == contact) {
    contact.style.display = "none";
  }
}

// Header flipper.

var flag = 2;
function flip() {
  if (flag%2 === 0) {
    document.getElementById("flip").innerHTML = "<div>Je ne perds jamais.</br> Soit je gagne, Soit j'apprends.</div><span> Nelson Mandela</span>";
    flag++;
  }
  else{
    document.getElementById("flip").innerHTML = "SALHI YASSIR</br>Développeur Web"
    flag++;
  }
}