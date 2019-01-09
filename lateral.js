var five = require("johnny-five");
var keypress = require("keypress");
//var board = new five.Board( { debug:true});
var board = new five.Board({ debug:true});
 
var servo;
board.on("ready", function() {
   servo = new five.Servo({
    //id:"tt-bot",
    pin: 9,
    startAt: 120
    //range:[0,80]
    //fps:20
  });
 console.log('VAL', servo.value);
 
//130 55 180
  function controller(ch, key) {
   
    //var speed = esc.last ? esc.speed : 0;
    console.log ( 'Pressed key: ' , key.name );

    if (key && key.shift) {
        if (key.name === "s") {
            servo.to(120);
            console.log('Middle'); 
            console.log('VAL s', servo.value);

        }

        if (key.name === "a") {
            console.log('Left ');   
            servo.to(179);
            console.log('VAL a ', servo.value);

        }

        
        if (key.name === "d") {
            console.log('Right '); 
            servo.to(55);
            console.log('VAL d', servo.value);

                    
        }
    }
  }

  keypress(process.stdin);
  console.log ('starting');
  process.stdin.on("keypress", controller);
  process.stdin.setRawMode(true);
  process.stdin.resume();
});