bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("Yes")
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P13, 0)
})
input.onButtonPressed(Button.AB, function () {
    bluetooth.uartWriteString("Maybe")
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteString("NO!")
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P12, 0)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Comma), function () {
    message = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma))
    if (message == "smile") {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (message == "frowm") {
        basic.showIcon(IconNames.Sad)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (message == "monster") {
        basic.showIcon(IconNames.Ghost)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (message == "resetLED") {
        basic.showIcon(IconNames.Heart)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
let message = ""
bluetooth.startUartService()
message = ""
basic.showIcon(IconNames.No)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
