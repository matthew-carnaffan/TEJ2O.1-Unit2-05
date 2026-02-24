/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew C
 * Created on: Feb 2026
 * This program tell the tempurature in kelvin
*/

let tempurature: number = input.temperature()
let tempuratureKelvin: number
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    tempuratureKelvin = Math.round(tempurature + 273.15)

    basic.showString('The current temperature is ' + (tempuratureKelvin).toString() + 'k.')
    
    basic.pause(100)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
