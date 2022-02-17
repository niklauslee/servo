const { PWM } = require("pwm");

class Servo {
  constructor() {
    this.pin = -1;
    this.period = 20000; // 50Hz
    this.min = 544;
    this.max = 2400;
    this.pwm = null;
  }

  attach(pin, min, max, period) {
    if (this.pin < 0) {
      this.pin = pin;
      if (min) this.min = min;
      if (max) this.max = max;
      if (period) this.period = period;
      var hz = 1000000 / this.period;
      this.pwm = new PWM(this.pin, hz, this.min);
      this.pwm.start();
    } else {
      throw "Already attached";
    }
  }

  detach() {
    this.pin = -1;
    this.pwm.stop();
    this.pwm.close();
  }

  write(angle) {
    var d = (this.max - this.min) / 180;
    this.pwm.setDuty((this.min + angle * d) / this.period);
  }

  read() {
    var d = (this.max - this.min) / 180;
    var angle = (this.pwm.getDuty() * this.period - this.min) / d;
    return angle;
  }
}

exports.Servo = Servo;
