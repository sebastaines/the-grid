input.onButtonPressed(Button.A, function () {
    led.plot(2, 2)
})
input.onButtonPressed(Button.AB, function () {
    led.plot(0, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(2, 2)
})
basic.forever(function () {
	
})
