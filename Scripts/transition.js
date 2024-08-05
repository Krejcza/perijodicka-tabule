window.addEventListener('load', () => {
   const transitionEl = document.querySelector('.transition');
   const anchors = document.querySelectorAll('a')

   setTimeout(() => {
       transitionEl.classList.remove('is-active');
   }, 500);

   for (let i = 0; i< anchors.length; i++){
      const anchor = anchors[i]

      anchor.addEventListener('click', (e)=>{
         e.preventDefault()

         if (anchor.classList.contains('no-transition')) {
            window.location.href = anchor.href;
            return;
         }

         
         let target = e.currentTarget.href

         console.log(target)
         transitionEl.classList.add('is-active')

         setTimeout(()=>{
            window.location.href = target
         }, 500)
      })
   }
});