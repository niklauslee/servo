# Servo

Kaluma library to control servo motors. It uses PWM internally, so the servo should be wired to a PWM-capable pin.

# Wiring

Here is a wiring example with SG90.

| Raspberry Pi Pico | SG90 |
| ----------------- | ---- |
| VBUS              | +    |
| GND               | -    |
| GP15              | IN   |

![wiring](https://github.com/niklauslee/servo/blob/main/images/wiring.jpg?raw=true)

# Install

```sh
npm install https://github.com/niklauslee/servo
```

# Usage

Here is an example:

```js
const {Servo} = require('servo');
const servo = new Servo();

// attach to GP15
servo.attach(15);

// Turn from 0 to 180 by 10 degrees
for (let i = 0; i <= 180; i = i+10) {
  servo.write(i);
  delay(500);
}
```

# API

## Class: Servo

### new Servo()

Create an instance of Servo class.

### attach(pin[, min, max, period])

- **`pin`** `<number>` A pin for control.
- **`min`** `<number>` Pulse width in microseconds for the minimum degree (e.g. 0 angle). Default: `544`.
- **`max`** `<number>` Pulse width in microseconds for the maximum degree (e.g. 180 angle). Default: `2400`.
- **`period`** `<number>` Period in microseconds. Default: `20000`.

Attach the instance to a PWM pin. 

If you want to use multiple servo motors, you need to check [PWM slices and channels](https://docs.kaluma.io/boards/raspberry-pi-pico#pwm).

### detach()

Detach the instance from the PWM pin;

### write(angle)

- **`angle`** `<number>`

Move the servo as the angle (0 ~ 180).

### read()

- **Return** `<number>`

Returns the current angle of the servo (0 ~ 180).
