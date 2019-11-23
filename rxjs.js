// https://www.youtube.com/watch?v=uQ1zhJHclvs

// Generic API with two callback 
function nextDataCallback(data) {
    console.log(data);
}

function errorCallback(err) {
    console.log(err);
}

function doneCallback() {
    //
}

function giveMeSomeData(nextCB, errorCB, completeCB) {
    fetch(url).then(nextCB, errorCB);
}

giveMeSomeData(
    nextDataCallback,
    errorCallback,
    doneCallback
);