var config = require('./config');
var Worker = require("tiny-worker");
var worker1 = new Worker("startarrow.js");
var worker2 = new Worker("startmouse.js");
var worker3 = new Worker("starttab.js");
 
worker1.onmessage = function (ev) {
    console.log(ev.data);
    worker1.terminate();
};
 
worker1.postMessage(config);
worker2.postMessage(config);
worker3.postMessage(config);
