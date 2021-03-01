input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    stop = 1
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Forever)
    stop = 0
    while (stop == 0) {
        basic.showIcon(IconNames.SmallHeart)
        if (stop != 0) {
            break;
        }
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
    stop = 1
    basic.showString("BOK")
})
let stop = 0
stop = 0
basic.forever(function () {
	
})
