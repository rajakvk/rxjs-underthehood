// https://www.youtube.com/watch?v=uQ1zhJHclvs

// put subscribe into an object and name it as observable
// tada... now you got observable, observing something
const observable = {
    subscribe: function subscribe(ob) {
        [10,20,30].forEach(ob.next);
        ob.complete();
    }
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

observable.subscribe(observer);