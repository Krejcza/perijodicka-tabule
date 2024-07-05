let toggle = document.querySelector('.toggle-crc-rnd')
let menus = document.querySelector('.menu-crcl-rnd')
let menuItems = document.querySelectorAll('.menu-crcl-rnd li');

toggle.addEventListener('click', ()=>{

   menus.classList.add('no-pointer-events');

   menus.classList.toggle('activehsj')

   if(menus.classList.contains('activehsj')){
      toggle.classList.add('opentzs')
   } else{
      toggle.classList.remove('opentzs')
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