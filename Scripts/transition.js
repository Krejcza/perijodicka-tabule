window.addEventListener('load', () => {
   const transitionEl = document.querySelector('.transition');
   const anchors = document.querySelectorAll('a');

   setTimeout(() => {
       transitionEl.classList.remove('is-active');
   }, 500);

   anchors.forEach(anchor => {
       anchor.addEventListener('click', (e) => {
           e.preventDefault();

           if (anchor.classList.contains('no-transition')) {
               const targetId = anchor.getAttribute('href').split('#')[1];
               const targetElement = document.getElementById(targetId);
               if (targetElement) {
                   targetElement.scrollIntoView({ behavior: 'smooth' });
               }
               return;
           }

           let target = anchor.href;

           console.log(target);
           transitionEl.classList.add('is-active');

           setTimeout(() => {
               window.location.href = target;
           }, 500);
       });
   });
});

function scrollToElement(event) {
   event.preventDefault();
   document.querySelector('#onlyfenssx').scrollIntoView({ behavior: 'smooth' });
}