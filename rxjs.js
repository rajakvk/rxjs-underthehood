// https://www.youtube.com/watch?v=uQ1zhJHclvs

// Generic API with one callback (silly example)
function nextDataCallback(data) {
    console.log(data);
}

function errorCallback(err) {
    //
}

function doneCallback() {
    //
}

function giveMeSomeData(nextCB, errorCB, completeCB) {
    document.addEventListener('click', nextCB);
}

giveMeSomeData(
    nextDataCallback,
    errorCallback,
    doneCallback
);