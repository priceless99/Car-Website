function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1)  {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
// function navbar() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  var slideIndex = 1;
  var t;
  
  showSlides(slideIndex);
  
  function plusSlides(n) {    
    slideIndex = slideIndex + n;
    clearTimeout(t);
    showSlides(slideIndex);
    console.log(slideIndex);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
  
    var i;
    var slides = document.getElementsByClassName("mySlides");
  
    if (n == undefined) {
      n = ++slideIndex;
    }
  
    if (n > slides.length) {
      slideIndex = 1
    }
  
    if (n < 1) {
      slideIndex = slides.length
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";
    t = setTimeout(showSlides, 3000);
  }