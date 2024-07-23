let shrek = document.querySelectorAll('.shaky-shake')

shrek.forEach((shaker) => {
  shaker.addEventListener('click', function() {

    this.classList.add('pillar-shake');

    setTimeout(() => {
      this.classList.remove('pillar-shake');
    }, 800);
  });
});
