var five = require("johnny-five");
var keypress = require("keypress");
var board = new five.Board();

board.on("ready", function() {

  var esc = new five.ESC(9);

  // Hold shift+arrow-up, shift+arrow-down to incrementally
  // increase or decrease speed.

  function controller(ch, key) {
    var isThrottle = false;

    if (key && key.shift) {
      if (key.name === "w") {
        speed += 1;
        isThrottle = true;
        console.log(speed);
      }

      if (key.name === "s") {
        speed -= 1;
        isThrottle = true;
        console.log(speed);

      }

      if (isThrottle) {
        esc.speed(speed);
      }
    }
  }
  var speed = 15;

  keypress(process.stdin);

  process.stdin.on("keypress", controller);
  process.stdin.setRawMode(true);
  process.stdin.resume();
});