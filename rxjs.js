// https://www.youtube.com/watch?v=uQ1zhJHclvs

// Create one more observable object called clickObservable 
const clickObservable = {
    subscribe: function subscribe(ob) {
        document.addEventListener('click', ob.next);
    }
}

const arrayObservable = {
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

arrayObservable.subscribe(observer);