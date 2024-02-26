function started() {
    console.log("Started Download");
}

function update(i) {
    console.log(i+"% of Download");
}

function completed() {
    console.log("The Download is completed!");
}

function performDownload(started, update, completed) {
    started();
    for (i = 1; i <= 100; i++) {
        update(i);
    }
    completed();
}

performDownload(started, update, completed);