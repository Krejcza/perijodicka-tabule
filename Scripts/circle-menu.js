let toggle = document.querySelector('.toggle-crc-rnd')
let tglWrp = document.querySelector('.menu-crcl-rnd-wrapper')
let menus = document.querySelector('.menu-crcl-rnd')
let menuItems = document.querySelectorAll('.menu-crcl-rnd li');

toggle.addEventListener('click', ()=>{

   menus.classList.add('no-pointer-events');

   menus.classList.toggle('activehsj')

   if(menus.classList.contains('activehsj')){
      toggle.classList.add('opentzs')
      tglWrp.style.width = '900px'
      tglWrp.style.height = '900px'
      tglWrp.style.transitionDelay = '0s'
   } else{
      toggle.classList.remove('opentzs')
      tglWrp.style.width = '400px'
      tglWrp.style.height = '400px'
      tglWrp.style.transitionDelay = '0.5s'
   }

   setTimeout(() => {
      menus.classList.remove('no-pointer-events');
  }, 1250);
})



let angle = 0;

menuItems.forEach((item, index) => {
  
   let angle = index * (360 / menuItems.length);
   
   let radians = angle * (Math.PI / 180);
   
   let x = Math.cos(radians) * 150; 
   let y = Math.sin(radians) * 150;

   let link = item.querySelector('a');
   link.style.setProperty('--x', `${x}px`);
   link.style.setProperty('--y', `${y}px`);
});



const accordition = document.querySelectorAll('.one-menu-mobxtu');

for (let i = 0; i < accordition.length; i++) {
    accordition[i].addEventListener('click', function() {
        this.classList.toggle('activesh');
    });
}