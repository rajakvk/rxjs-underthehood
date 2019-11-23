// https://www.youtube.com/watch?v=uQ1zhJHclvs

// bundle callback in one object with two callbacks

function giveMeSomeData(ob) {
    [10,20,30].forEach(ob.next);
    ob.complete();
}

const observer = {
    next: function nextDataCallback(data) {
        console.log(data);
    },
    error: function errorCallback(err) {
        console.log(err);
    },
    complete: function doneCallback() {
        console.log(`Complete`);
    }
}

giveMeSomeData(observer);