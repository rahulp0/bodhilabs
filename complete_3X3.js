
var five = require("johnny-five");
var keypress = require("keypress");
//var board = new five.Board( { debug:true});
var board = new five.Board({ debug:true});

//Enter ranges: 

//LONGITUDINAL:
var lon_down=180;
var lon_mid=160;
var lon_up=140;

//LATERAL:
var lat_right=180;
var lat_mid=130;
var lat_left=55;


var servo_lat;
var servo_lon;

board.on("ready", function() {
    servo_lat= new five.Servo({
     //id:"tt-bot",
      pin: 10,
      startAt: lat_mid
     //range:[0,80]
     //fps:20
    });
 
    servo_lon= new five.Servo({
      pin: 11,
      startAt: lon_mid
    });
 
    console.log("Bot Ready!\n");
    console.log("VAL", servo_lat.value);
    console.log("VAL", servo-lon.value);

    function controller(ch, key) {
        console.log ( 'Pressed key: ' , key.name );
        if (key) {
            if (key.name === "q") {
                console.log('Combination. #1 ');   
                servo_lat.to(lat_left);
                servo_lon.to(lon_up);
            }

            else if (key.name === "w") {
                console.log('Combination. #2 ');   
                servo_lat.to(lat_mid);
                servo_lon.to(lon_up);
            }

            else if (key.name === "e") {
                console.log('Combination. #3 ');   
                servo_lat.to(lat_right);
                servo_lon.to(lon_up);
            }

            else if (key.name === "r") {
                console.log('Combination. #4 ');   
                servo_lat.to(lat_left);
                servo_lon.to(lon_mid);
            }

            else if (key.name === "t") {
                console.log('Combination. #5 ');   
                servo_lat.to(lat_mid);
                servo_lon.to(lon_mid);
            }

            else if (key.name === "y") {
                console.log('Combination. #6 ');   
                servo_lat.to(lat_right);
                servo_lon.to(lon_mid);
            }

            else if (key.name === "u") {
                console.log('Combination. #7 ');   
                servo_lat.to(lat_left);
                servo_lon.to(lon_down);
            }

            else if (key.name === "i") {
                console.log('Combination. #8 ');   
                servo_lat.to(lat_mid);
                servo_lon.to(lon_down);
            }

            else if (key.name === "o") {
                console.log('Combination. #9 ');   
                servo_lat.to(lat_right);
                servo_lon.to(lon_down);
            }
            
            else
                console.log("Input isn't valid\nChoose strictly among the available 9 Combinationitions ");
//Options for the next run
            console.log('VAL lat: ', servo_lat.value);
            console.log('VAL lon: ', servo_lon.value);
            console.log("");
            console.log("\n\n\n\nCombinationsible configurations:");
            console.log(" ___________________________");
            for (var i=0 ; i<9;){
                console.log("|  ",++i,"  |   ",++i,"   |   ",++i,"   |");
                console.log("+_______|_________|_________+");
            }
            console.log("\n\nEnter next Combinationition: ");

      }
    }

  keypress(process.stdin);
  console.log("\n\nCombinationsible configurations:");
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