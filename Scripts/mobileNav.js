let hamburger = document.querySelector('.svg-ham-logo');
let menu = document.querySelector('.mobile-menu');
let svgCrossLogo = document.querySelector('.svg-cross-logo');
let overlay = document.querySelector('.overlay');
let body = document.body



document.addEventListener('DOMContentLoaded', function() {

   hamburger.addEventListener('click', function(){
       menu.classList.toggle('open');
       svgCrossLogo.style.display = 'block'
       hamburger.style.display = 'none'
       overlay.classList.toggle('active');
       body.classList.toggle('no-scroll')
      
       svgCrossLogo.addEventListener('click', function(){
         body.classList.remove('no-scroll')
       })
   });

   svgCrossLogo.addEventListener('click', function(){
      menu.classList.toggle('open');
      svgCrossLogo.style.display = 'none'
      hamburger.style.display = 'block'
      overlay.classList.remove('active');
   })

   window.addEventListener('resize', function() {
      menu.classList.remove('open');
      svgCrossLogo.style.display = 'none'
      hamburger.style.display = 'block'
      overlay.classList.remove('active');
  });

  window.addEventListener('scroll', function() {
   overlay.classList.remove('active');
  })


   
});


// Vyjetí menší navigace

window.addEventListener('scroll', function() {
   let originalNav = document.querySelector('.nav-origin');
   let stickyNav = document.querySelector('.nav-floating');
   let scrollPosition = window.scrollY || document.documentElement.scrollTop;

   if (scrollPosition > originalNav.offsetHeight) {
       stickyNav.classList.add('active');
   } else {
       stickyNav.classList.remove('active');
   }
});
