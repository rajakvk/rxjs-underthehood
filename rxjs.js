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
    [10,20,30].forEach(nextCB);
}

giveMeSomeData(
    nextDataCallback,
    errorCallback,
    doneCallback
);