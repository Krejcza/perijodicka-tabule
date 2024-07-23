let toggle = document.querySelector('.toggle-crc-rnd')
let tglWrp = document.querySelector('.menu-crcl-rnd-wrapper')
let menus = document.querySelector('.menu-crcl-rnd')
let menuItems = document.querySelectorAll('.menu-crcl-rnd li');
let hotdog = document.querySelectorAll('.menu-crcl-rnd li a');

toggle.addEventListener('click', ()=>{

   menus.classList.add('no-pointer-events');

   menus.classList.toggle('activehsj')

   if(menus.classList.contains('activehsj')){
      toggle.classList.add('opentzs')
      tglWrp.style.width = '900px'
      tglWrp.style.height = '900px'
      tglWrp.style.transitionDelay = '0s'
      tglWrp.style.borderRadius = '500px'
   } else{
      toggle.classList.remove('opentzs')
      tglWrp.style.width = '400px'
      tglWrp.style.height = '400px'
      tglWrp.style.transitionDelay = '0.5s'
      tglWrp.style.borderRadius = '50px'
   }

   setTimeout(() => {
      menus.classList.remove('no-pointer-events');
  }, 1250);
})



let angle = 0;

menuItems.forEach((item, index) => {
  
   let angle = index * (360 / menuItems.length);
   
   let radians = angle * (Math.PI / 180);
   
   let x = Math.cos(radians) * 250; 
   let y = Math.sin(radians) * 250;

   let link = item.querySelector('a');
   link.style.setProperty('--x', `${x}px`);
   link.style.setProperty('--y', `${y}px`);
});



const accordition = document.querySelectorAll('.one-menu-mobxtu');

for (let i = 0; i < accordition.length; i++) {
    accordition[i].addEventListener('click', function() {
        this.classList.toggle('activesh');
        
        for (let j = 0; j < accordition.length; j++) {
            const icon = accordition[j].querySelector('.main-topyc i');
            const mainTopic = accordition[j].querySelector('.main-topyc')
            
            if (accordition[j].classList.contains('activesh')) {
                icon.classList.add('fa-book-open');
                icon.classList.remove('fa-book-skull');
                mainTopic.classList.add('activesh');
            } else {
                icon.classList.remove('fa-book-open');
                icon.classList.add('fa-book-skull');
                mainTopic.classList.remove('activesh');
            }
        }
    });
}


let currentIndex = 0;
let hoverInterval

function activateNextItem() {
    if (currentIndex >= hotdog.length) {
        currentIndex = 0;
    }

    const currentItem = hotdog[currentIndex];
    currentItem.classList.add('hover-active');

     hoverInterval = setTimeout(() => {
        currentItem.classList.remove('hover-active');
        currentIndex++;
        activateNextItem();
    }, 3000);
}

function startHoverCycle() {
    activateNextItem();
}

function stopHoverCycle() {
    clearTimeout(hoverInterval);
    hotdog.forEach(item => item.classList.remove('hover-active'));
}

hotdog.forEach(item => {
    item.addEventListener('mouseenter', stopHoverCycle);
    item.addEventListener('mouseleave', startHoverCycle);
});

startHoverCycle();