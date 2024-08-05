document.addEventListener('DOMContentLoaded', function() {
   let tabHeaderElements = document.querySelectorAll('.tab-headerr > div');
   let tabBodyElements = document.querySelectorAll('.tab-bodyr > div');
   let tabIndicator = document.querySelector('.tab-indicatorr > div');
   let tabDropdown = document.querySelector('.tab-dropdown-chemistry');

   if (!tabHeaderElements.length || !tabBodyElements.length || !tabIndicator || !tabDropdown) {
       console.error('Jedno nebo více požadovaných elementů nebylo nalezeno.');
       return; 
   }

   function setActiveTab(index) {
       document.querySelector('.tab-headerr .activer')?.classList.remove('activer');
       document.querySelector('.tab-bodyr .activer')?.classList.remove('activer');

       
       tabHeaderElements[index].classList.add('activer');
       tabBodyElements[index].classList.add('activer');

       
       if (tabIndicator) {
           tabIndicator.style.left = `${index * 20}%`;
       }
   }

   tabHeaderElements.forEach((element, index) => {
       element.addEventListener('click', () => {
           setActiveTab(index);
           tabDropdown.value = index;
       });
   });

   tabDropdown.addEventListener('change', (event) => {
       setActiveTab(event.target.value);
   });

   setActiveTab(tabDropdown.value);
});
