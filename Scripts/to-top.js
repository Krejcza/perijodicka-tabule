let calcScrollValue = () =>{
   let scrollProgress = document.getElementById('progress-br')
   let progressValue = document.getElementById('progress-value')

   let pos = document.documentElement.scrollTop
   let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
   let scrollValue = Math.round((pos * 100) / calcHeight)

   if(pos>100){
      scrollProgress.style.display = 'grid'
      scrollProgress.style.opacity = '1'
   } else{
      scrollProgress.style.display = 'none'
      scrollProgress.style.opacity = '0'
   }

   scrollProgress.addEventListener('click', ()=>{
      document.documentElement.scrollTop = 0
   })

   scrollProgress.style.background = `conic-gradient(#2F184B ${scrollValue}%, #C8B1E4 ${scrollValue}%)`
}

window.onscroll = calcScrollValue
window.onload = calcScrollValue
