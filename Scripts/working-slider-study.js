const tab = document.querySelector('.pick-study-all'),
      badges = document.querySelectorAll('.pick-study-one'),
      icons = document.querySelectorAll('.pick-study-icon'),
      oneIcon = document.querySelectorAll('.pick-study-icon i'),
      { clientWidth, scrollWidth } = tab;


icons.forEach(icon => {
   icon.addEventListener('click', () => {
      const iconElement = icon.querySelector('i');
      if (iconElement.classList.contains('fa-chevron-right')) {
         tab.scrollLeft += 300;
      } else {
         tab.scrollLeft -= 300;
      }
   });
});


tab.addEventListener('scroll', (e)=>{
   updateIcons(e.target.scrollLeft)
})

tab.addEventListener('wheel', (e)=>{
   tab.scrollLeft += e.deltaY
   tab.style.scrollBehavior = 'auto'
})

function updateIcons(scrolled_width) {
   icons[0].classList.toggle('hidenwqs', scrolled_width <= 1);
   icons[1].classList.toggle('hidenwqs', scrollWidth - clientWidth - scrolled_width <= 1);
}