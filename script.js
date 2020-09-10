particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
console.log('U r always Welcome :)');

var cardOverlay = document.querySelectorAll('.p-card-item');
var touchBtn = document.querySelector('.contact-wrapper__cta-btn');

cardClick(cardOverlay);
btnClick(touchBtn);

function cardClick(clickElement) {

  for (let i = 0; i < clickElement.length; i++) {
    clickElement[i].nextElementSibling.addEventListener("touchstart", function() {
      clickElement[i].nextElementSibling.style.opacity = "1";
    });
    
    clickElement[i].nextElementSibling.addEventListener("touchend", function() {
      clickElement[i].nextElementSibling.style.opacity = "0";
    });
  }
}

function btnClick(clickElement) {

    clickElement.addEventListener("touchstart", function() {
      clickElement.style.backgroundColor = "#25FFCB";
      clickElement.style.color = "#08080A";
    });
    
    clickElement.addEventListener("touchend", function() {
      clickElement.style.backgroundColor = "#08080A";
      clickElement.style.color = "#25FFCB";
    });
}