const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 100, fill: 'forwards' });
    });

    window.addEventListener('mousedown', () => {
        cursorDot.style.width = '15px';
        cursorDot.style.height = '15px';

        cursorOutline.style.width = '50px';
        cursorOutline.style.height = '50px';
    });

    window.addEventListener('mouseup', () => {
        cursorDot.style.width = '10px';
        cursorDot.style.height = '10px';

        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
    });

    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, .card-wrapper, .swiper-navBtn, .pagination-wrapper');

    interactiveElements.forEach(el => {
        el.classList.add('interactive-uno-mom');
    });

    const hoverMuseElements = document.querySelectorAll('.houver-muse-kdsh');

    hoverMuseElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.width = '0px';
            cursorDot.style.height = '0px';
            cursorDot.style.borderRadius = '25%';
            cursorDot.style.backgroundColor = '#2F184B'

            cursorOutline.style.width = '20px';
            cursorOutline.style.height = '20px';
            cursorOutline.style.borderRadius = '35%';
            cursorOutline.style.borderColor = '#323232'
            cursorOutline.style.boxShadow = '0px 0px 20px #F4EFFA'
        });

        el.addEventListener('mouseleave', () => {
            cursorDot.style.width = '10px';
            cursorDot.style.height = '10px';
            cursorDot.style.backgroundColor = '#323232';
            cursorDot.style.borderRadius = '50%';

            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.borderColor = '#C8B1E4';
            cursorOutline.style.borderRadius = '50%';
        });
    });

    
} else {
    cursorDot.style.display = 'none';
    cursorOutline.style.display = 'none';
}