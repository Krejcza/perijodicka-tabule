let scrollProgress = document.getElementById('progress-br');
let progressValue = document.getElementById('progress-value');

const calcScrollValue = () => {
    let pos = document.documentElement.scrollTop || document.body.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollProgress.classList.add('show');
    } else {
        scrollProgress.classList.remove('show');
    }

    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#2F184B ${scrollValue}%, #C8B1E4 ${scrollValue}%)`;
};

window.addEventListener('scroll', calcScrollValue); 

window.onload = function() {
    let modal = document.getElementById("contentWarning");
    let span = document.querySelector(".close-warn");
    let btnHery = document.querySelector(".btn-numer-un");
    let btnMamynko = document.querySelector(".btn-numer-tw");

    const showModal = () => {
        if (modal) {
            modal.classList.remove("hid");
            modal.style.display = "flex";
            document.body.classList.add("no-scroll");
        }
    };
    
    const hideModal = () => {
        if (modal) {
            modal.classList.add("hid");
            modal.style.display = "none";
            document.body.classList.remove("no-scroll");
        }
    };

    const checkAndShowModal = () => {
        const lastVisit = localStorage.getItem("lastVisit");
        const now = new Date().getTime();
        const sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000;

        if (!lastVisit || (now - parseInt(lastVisit, 10)) > sevenDaysInMillis) {
            showModal();
        } else {
            hideModal();
        }
    };

    checkAndShowModal();

    if (span) {
        span.onclick = hideModal;
    }

    if (btnHery) {
        btnHery.onclick = function() {
            const now = new Date().getTime();
            localStorage.setItem("lastVisit", now.toString());
            hideModal();
        };
    }

    if (btnMamynko) {
        btnMamynko.onclick = function() {
            window.location.href = "no-content.html";
        };
    }

    window.onclick = function(e) {
        if (e.target === modal) {
            hideModal();
        }
    };

    calcScrollValue(); 
};
