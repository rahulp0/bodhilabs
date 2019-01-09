
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  console.log('Board ready');
  
  var stepper = new five.Stepper({
    type: five.Stepper.TYPE.FOUR_WIRE,
    stepsPerRev: 360,
    pins: [8,9,10,11],
  });
  try {
    stepper.rpm(60).cw().step(1080, function() {
      console.log("done");
    });
  }
  catch(err) {
     console.log('ERROR', err);
     
  }
  
  // Make 10 full revolutions counter-clockwise at 60 rpm with acceleration and deceleration
  /*
  stepper.rpm(60).ccw().accel(1600).decel(1600).step(2000, function() {

    console.log("Done moving CCW");

    // once first movement is done, make 10 revolutions clockwise at previously
    //      defined speed, accel, and decel by passing an object into stepper.step
    stepper.step({
      steps: 2000,
      direction: five.Stepper.DIRECTION.CW
    }, function() {
      console.log("Done moving CW");
    });
  });
  */
});
