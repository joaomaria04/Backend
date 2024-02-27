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

var arrayUtils = require("./ArrayUtils.js");


var array = [1,2,3,4,5,6,7,8,9,10];

var array2 = [11,12,13,14,15,16,17,18,19,20];

var index = arrayUtils.indexOf(array, 3);

var subarray = arrayUtils.subArray(array, 3 , 6);

var sameLength = arrayUtils.isSameLength(array, array2);

var reverseArray = arrayUtils.reverse(array);

console.log(arrayUtils.isEmpty(array));

console.log("A posição do indice é "+index);

console.log(subarray);

console.log(sameLength);

console.log(reverseArray);
