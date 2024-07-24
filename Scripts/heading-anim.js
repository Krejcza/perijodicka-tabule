
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



  document.querySelectorAll('.ml16').forEach(function(textWrapperr) {
    textWrapperr.innerHTML = textWrapperr.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml16 .letter',
      translateY: [-100,0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i
    }).add({
      targets: '.ml16',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 100
    });