input.onGesture(Gesture.Shake, function () {
    Punkte += 1
    basic.pause(500)
})
let Punkte = 0
basic.forever(function () {
    basic.showNumber(Punkte)
    if (Punkte == 10) {
        basic.setLedColor(0x00ff00)
        music.playMelody("G B A G C5 B A B ", 300)
        basic.showString("Geschafft!")
    }
})
