var urlParams = new URLSearchParams(window.location.search);
var image = urlParams.get('image');
console.log(image);

var intimage = parseInt(image);
var slideIndex = intimage;
showDivs(slideIndex);

var myTimeout = setTimeout(auto, 3000);

function auto() {
  showDivs(slideIndex += 1);
  myTimeout = setTimeout(auto, 3000);
}

function plusDivs(n) {
    showDivs(slideIndex += n);
    clearTimeout(myTimeout);
    myTimeout = setTimeout(auto, 3000);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("galleryimage");
  if (n > intimage + 4) {slideIndex = intimage}
  if (n < intimage) {slideIndex = intimage + 4} ;
  for (i = 0; i < 35; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function setDiv(n){
    intimage = n;
    slideIndex = n;
    showDivs(n);
    clearTimeout(myTimeout);
    myTimeout = setTimeout(auto, 3000);
}