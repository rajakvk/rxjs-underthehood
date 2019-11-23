// https://www.youtube.com/watch?v=uQ1zhJHclvs

// just rename giveMeSomeData as subscribe (LOL)

function subscribe(ob) {
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

subscribe(observer);