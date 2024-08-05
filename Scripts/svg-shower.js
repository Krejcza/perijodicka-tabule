const iconInteractiveWraps = document.querySelectorAll('.icon-interactive-wrap');

iconInteractiveWraps.forEach((iconWrap) => {
  iconWrap.addEventListener('click', () => {
    const textInteractive = iconWrap.parentElement.querySelector('.text-interactive');

    if (textInteractive) {
      textInteractive.classList.toggle('showerr');

      if (textInteractive.classList.contains('showerr')) {
        setTimeout(() => {
          textInteractive.classList.remove('showerr');
        }, 5000);
      }
    }
  });
});