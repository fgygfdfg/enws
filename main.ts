let num = 0
basic.forever(function () {
    num = input.compassHeading()
    music.playMelody("C - - - - - - - ", 120)
    if (num < 22.5) {
        basic.showString("N")
    } else if (num < 67.5) {
        basic.showString("NE")
    } else if (num < 112.5) {
        basic.showString("E")
    } else if (num < 157.5) {
        basic.showString("SE")
    } else if (num < 202.5) {
        basic.showString("S")
    } else if (num < 247.5) {
        basic.showString("SW")
    } else if (num < 292.5) {
        basic.showString("W")
    } else if (num < 337.5) {
        basic.showString("NW")
    } else {
        basic.showString("N")
    }
})
