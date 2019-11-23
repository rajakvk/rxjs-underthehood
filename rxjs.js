// https://www.youtube.com/watch?v=uQ1zhJHclvs

// Rename observable into arrayObservable 
const ArrayObservable = {
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

ArrayObservable.subscribe(observer);