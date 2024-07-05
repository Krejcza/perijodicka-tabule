document.querySelector('body').addEventListener('mousemove', eyeballLeft);
document.querySelector('body').addEventListener('mousemove', eyeballRight);

function eyeballLeft(e) {
    let leye = document.querySelector('.eye.left');
    if (leye) {
        let x = (leye.getBoundingClientRect().left) + (leye.clientWidth / 2);
        let y = (leye.getBoundingClientRect().top) + (leye.clientHeight / 2);

        let radian = Math.atan2(e.pageY - y, e.pageX - x);
        let rot = (radian * (180 / Math.PI)) + 230;

        leye.style.transform = 'rotate(' + rot + 'deg)';
    }
}

function eyeballRight(e) {
    let reye = document.querySelector('.eye.right');
    if (reye) {
        let x = (reye.getBoundingClientRect().left) + (reye.clientWidth / 2);
        let y = (reye.getBoundingClientRect().top) + (reye.clientHeight / 2);

        let radian = Math.atan2(e.pageY - y, e.pageX - x);
        let rot = (radian * (180 / Math.PI)) + 125;

        reye.style.transform = 'rotate(' + rot + 'deg)';
    }
}