window.addEventListener('scroll', function() {
    let isMobile = window.matchMedia("(max-width: 800px)").matches;

    let backgroundAltPgs = document.querySelector('.background-alt-pgs');
    if (backgroundAltPgs) {
        if (isMobile) {
            backgroundAltPgs.style.backgroundPosition = 'center top';
        } else {
            let scroll = window.scrollY;
            let offset = -scroll * 0.3;
            backgroundAltPgs.style.backgroundPosition = `center ${offset}px`;
        }
    }

    let mainLandingMmBackgr = document.querySelector('.main-landing-mm-backgr');
    if (mainLandingMmBackgr) {
        if (isMobile) {
            mainLandingMmBackgr.style.backgroundPosition = 'center top';
        } else {
            let scroll = window.scrollY;
            let offset = -scroll * 0.5;
            mainLandingMmBackgr.style.backgroundPosition = `center ${offset}px`;
        }
    }
});