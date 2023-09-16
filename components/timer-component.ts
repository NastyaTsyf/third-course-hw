
export function stopTimer(timerSekId: number, timerMinId: number) {
    clearInterval(timerSekId)
    clearInterval(timerMinId)
}

export function renderTimeNumber (counter: number) {
    if (counter < 10) {
        return "0" + counter
    } else if (counter >= 10) {
        return String(counter)
    } else if (counter === 60) {
        return "00"
    } else {
        return "00"
    }
}



