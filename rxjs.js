// https://www.youtube.com/watch?v=uQ1zhJHclvs

// three call backs when stream of data comes in
const readable = getReadableStreamSomehow();

function nextDataCallback(chunk) {
    console.log(`Received ${chunk.length} byes of data`);
}

function errorCallback(err) {
    console.log(`Bad stuff happened: ${err}`);
}

function doneCallback() {
    console.log(`There will be no more data`);
}

readable.on('data', nextDataCallback);
readable.on('error', errorCallback);
readable.on('end', doneCallback);