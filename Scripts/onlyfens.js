let cards = document.querySelectorAll('.card-onlyfens');

cards.forEach((card) => {
  card.addEventListener('click', function() {
    
    if (!card.classList.contains('is-flipped')) {
      card.classList.add('is-flipped');
    }
  });
});