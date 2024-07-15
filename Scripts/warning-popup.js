window.onload = function() {
    let modal = document.getElementById("contentWarning")
    let span = document.getElementsByClassName("close-warn")[0]
    let btnHery = document.querySelector(".btn-numer-un")
    let btnMamynko = document.querySelector(".btn-numer-tw")

    const showModal = () => {
        modal.style.display = "flex"
        document.body.classList.add("no-scroll")
    }

    const hideModal = () => {
        modal.style.display = "none"
        document.body.classList.remove("no-scroll")
    }

    const checkAndShowModal = () => {
        const lastVisit = localStorage.getItem("lastVisit")
        const now = new Date().getTime()
        const sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000

        if (!lastVisit || (now - parseInt(lastVisit, 10)) > sevenDaysInMillis) {
            showModal()
        } else {
            hideModal()
        }
    }

    checkAndShowModal()

    span.onclick = hideModal
    btnHery.onclick = function() {
        const now = new Date().getTime()
        localStorage.setItem("lastVisit", now.toString())
        hideModal()
    };
    btnMamynko.onclick = function() {
        window.location.href = "no-content.html"
    }

    window.onclick = function(e) {
        if (e.target == modal) {
            hideModal()
        }
    }
}