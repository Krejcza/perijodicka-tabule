const mainTopycElements = document.querySelectorAll('.main-topyc')
let currentIndeks = 0
let animationTimeout

function resetStyles() {
    mainTopycElements.forEach(el => {
        el.classList.remove('rightnower')
    })
}

function highlightElement(index) {
    resetStyles()

    const element = mainTopycElements[index]
    element.classList.add('rightnower')
}

function startHighlighting() {
    highlightElement(currentIndeks)

    currentIndeks = (currentIndeks + 1) % mainTopycElements.length

    animationTimeout = setTimeout(startHighlighting, 3000)
}

function stopHighlighting() {
    clearTimeout(animationTimeout)
    resetStyles()
}


startHighlighting()


mainTopycElements.forEach(item => {
    item.addEventListener('click', () => {
        stopHighlighting()
    })
})
