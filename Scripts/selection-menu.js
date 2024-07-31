let tabs = document.querySelector('.tabs-sd')
let tabHeader = document.querySelector('.tab-headerr')
let tabHeaderElements = document.querySelectorAll('.tab-headerr > div')
let tabBody = document.querySelector('.tab-bodyr')
let tabBodyElements = document.querySelectorAll('.tab-bodyr > div')
let tabIndicator = document.querySelector('.tab-indicatorr > div')


for (let i = 0; i < tabHeaderElements.length; i++) {
   tabHeaderElements[i].addEventListener('click', () => {
      tabHeader.querySelector('.activer').classList.remove('activer')
      tabHeaderElements[i].classList.add('activer')
      tabBody.querySelector('.activer').classList.remove('activer')
      tabBodyElements[i].classList.add('activer')
      tabIndicator.style.left = `${i * 20}%`
      
   })
}
