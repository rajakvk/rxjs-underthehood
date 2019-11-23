// https://www.youtube.com/watch?v=uQ1zhJHclvs

// Example of simple callback
const myElem = document.querySelector('#myElem');

function consoleLogClick(x) {
    console.log(`Clicked {x}`)
}

myElem.addEventListener('click', consoleLogClick);