export function timer(element: HTMLInputElement | null) {
    if (element) {
        let elementValue = Number(element.value)
        if (elementValue <= 59) {
            elementValue = elementValue + 1
            console.log(elementValue)
        } else {
            elementValue = 0
            elementValue = elementValue + 1
            console.log(elementValue)
        }
    }
}


export function stopTimer(timerSekId: number, timerMinId: number) {
    clearInterval(timerSekId)
    clearInterval(timerMinId)
}
