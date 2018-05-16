
// https://github.com/nexe/nexe
var robot = require("robotjs");
//http://robotjs.io/docs/syntax#keytogglekey-down-modifier
var sleep = require('sleep');
// sleep.sleep(n): sleep for n seconds
// sleep.msleep(n): sleep for n miliseconds
// sleep.usleep(n): sleep for n microseconds (1 second is 1000000 microseconds)


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function start(config) {
    setTimeout(function startArrow(){
        while (1) {
            let arrowCount = getRandomInt(config.maxArrowCount)
            let counter = arrowCount;
            let isUp = 'up';
            if (getRandomInt(2) == 1)
                isUp = 'down';
            
            while (counter > 0) {
                robot.keyTap(isUp);
                sleep.msleep(1000);
                counter --;
            }
            sleep.sleep(getRandomInt(config.maxArrowInterval));
        }
    }, 1000 * 2);
}

onmessage = function (ev) {
    start(ev.data);
};