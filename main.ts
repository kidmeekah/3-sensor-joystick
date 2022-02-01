let brightness = 0
let brightess2 = 0
basic.forever(function () {
    brightness = pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    4
    )
    brightess2 = pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    0,
    4
    )
    pins.analogWritePin(AnalogPin.P0, brightness + brightess2)
})
