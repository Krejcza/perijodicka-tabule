const iconInteractiveWraps = document.querySelectorAll('.icon-interactive-wrap');

iconInteractiveWraps.forEach((iconWrap) => {
  iconWrap.addEventListener('click', () => {
    const textInteractive = iconWrap.parentElement.querySelector('.text-interactive');

    if (textInteractive) {
      textInteractive.classList.toggle('showerr');
    }
  });
});