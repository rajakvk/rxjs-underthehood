// https://www.youtube.com/watch?v=uQ1zhJHclvs

// Other types of call back
const res = fetch('https://jsonplaceholder/typicode.com/users/1'
).then(r => r.json());

function successCallback(value) {
    console.log(`We got back ${value}`);
}

function failureCallback(err) {
    console.log(`:-( ${err})`);
}
// callback for success as well as failure
res.then(successCallback, failureCallback);