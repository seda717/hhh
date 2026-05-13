input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, -90)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, -250)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, -90)
})
pins.servoWritePin(AnalogPin.P0, -90)
basic.forever(function () {
	
})
