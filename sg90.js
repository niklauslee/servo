const { Servo } = require("./index");
const servo = new Servo();

// attach to GP15
servo.attach(15);

// Turn from 0 to 180 by 10 degrees
for (let i = 0; i <= 180; i = i + 10) {
  servo.write(i);
  delay(500);
}
