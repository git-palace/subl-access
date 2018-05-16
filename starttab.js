
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
    setTimeout(function startTab(){
        while (1) {
            //
            let tabCount = getRandomInt(config.maxTabCount)
            let counter = tabCount;
            let isShift = true;
            if (getRandomInt(2) == 1)
                isShift = false;
            

            while (counter > 0) {

                if (isShift) 
                    robot.keyToggle("shift", "down");
                robot.keyToggle("control", "down");
                robot.keyTap("tab");

                robot.keyToggle("control", "up");		
                if (isShift) 
                    robot.keyToggle("shift", "up");

                sleep.msleep(500);
                counter --;
            }
            sleep.sleep(getRandomInt(config.maxTabInterval));
        }
    }, 1000 * 2);
}

onmessage = function (ev) {
    start(ev.data);
};