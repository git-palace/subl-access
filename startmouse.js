
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
    setTimeout(function startMouse(){
        var mouse = robot.getMousePos();
        while (1) {
            let mouseCount = getRandomInt(config.maxMouseCount)
            let counter = mouseCount;

            while (counter > 0) {
                robot.mouseToggle('down');
                robot.mouseToggle('up');

                let delta = (getRandomInt(config.maxMouseMoveDelta) - (config.maxMouseMoveDelta/2));
                robot.moveMouse(mouse.x, mouse.y + delta);
                sleep.msleep(100);
                counter --;                
            }
            sleep.sleep(getRandomInt(config.maxMouseInterval));
        }

    }, 1000 * 2);
}

onmessage = function (ev) {
    start(ev.data);
};