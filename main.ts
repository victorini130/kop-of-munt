let munt = 0
input.onButtonPressed(Button.A, function () {
    munt = randint(1, 2)
    if (munt == 1) {
        basic.showString("kop")
    } else if (munt == 2) {
        basic.showString("munt")
    }
})
