// https://www.youtube.com/watch?v=uQ1zhJHclvs

// implementing map operator
function map(transformFN) {
    // in this scenario 'this' refers to arrayObservable
    const inputObservable = this;
    const outputObservable = createObservable(function subscribe(outputObservable) {
        inputObservable.subscribe({
            next: function(x) {
                const y = transformFN(x);
                outputObservable.next(y);
            },
            error: function(err) {
                outputObservable.error(err)
            },
            complete: function() {
                outputObservable.complete();
            }
        })
    });
    return outputObservable;
}

function createObservable (subscribe) {
    return {
        subscribe: subscribe,
        map: map
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

arrayObservable
    .map(x => x/10)
    .subscribe(observer);