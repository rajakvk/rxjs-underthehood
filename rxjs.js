// https://www.youtube.com/watch?v=uQ1zhJHclvs

// define helper function to create observable objects
function createObservable (subscribe) {
    return {
        subscribe: subscribe
    }
}

const clickObservable = createObservable(function subscribe(ob) {
    document.addEventListener('click', ob.next);
});

const arrayObservable = createObservable(function subscribe(ob) {
    [10,20,30].forEach(ob.next);
    ob.complete();
});

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

arrayObservable.subscribe(observer);