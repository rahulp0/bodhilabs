var five = require("johnny-five");
var keypress = require("keypress");
const readline = require("readline");
var board = new five.Board({ debug:true});
 
var servo;
board.on("ready", function() {
   servo = new five.Servo({
    //id:"tt-bot",
    pin: 10,
    startAt: 130
    //range:[0,80]
    //fps:20
  });
 console.log('VAL', servo.value);
 

  function controller(ch, key) {
   
    console.log ( 'Pressed key: ' , key.name );

    if (key) {

        if (key.name === "q") {
            console.log('Left ');   
            servo.to(130);
            console.log('VAL a ', servo.value);
            console.log("");
            console.log("\n\n\n\nPossible configurations:");
            console.log(" ___________________________");
            for (var i=0 ; i<9;){
                console.log("|  ",++i,"  |   ",++i,"   |   ",++i,"   |");
                console.log("+_______|_________|_________+");
            }
            console.log("\n\nEnter next position: ");

        }

        if (key.name === "w") {
            console.log('Left ');   

            if(servo.value == 130)
                servo.to(55);
            else if (servo.value == 180)
                servo.to(130)
            else 
                console.log("Reached max! ")
            console.log('VAL a ', servo.value);
            console.log("\n\n\n\nPossible configurations:");
            console.log(" ___________________________");
            for (var i=0 ; i<9;){
                console.log("|  ",++i,"  |   ",++i,"   |   ",++i,"   |");
                console.log("+_______|_________|_________+");
            }
            console.log("\n\nEnter next position: ");
            


        }

        
        if (key.name === "e") {
            console.log('Right '); 
            if(servo.value == 130)
                servo.to(180);
            else if (servo.value == 55)
                servo.to(130);
            else 
                console.log("Reached max! ")


            console.log('VAL d', servo.value);
            console.log("\n\n\n\nPossible configurations:");
            console.log(" ___________________________");
            for (var i=0 ; i<9;){
                console.log("|  ",++i,"  |   ",++i,"   |   ",++i,"   |");
                console.log("+_______|_________|_________+");
            }
            console.log("\n\nEnter next position: ");


                    
        }

    }
  }

  keypress(process.stdin);
  console.log("\n\nPossible configurations:");
  console.log(" ___________________________");
  for (var i=0 ; i<9;){
    console.log("|  ",++i,"  |   ",++i,"   |   ",++i,"   |");
    console.log("+_______|_________|_________+");
  }
    
  console.log ('Starting..\n');
  process.stdin.on("keypress", controller);
  process.stdin.setRawMode(true);
  process.stdin.resume();
  
});