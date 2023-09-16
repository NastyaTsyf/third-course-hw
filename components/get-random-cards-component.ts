import {cloneDeep} from "lodash"

export type Cards = {
    name: string;
    suit: string;
    rank: string;
    isClicked: boolean;
    suitImgBig: string;
    suitImgLittle: string;
}[]

const shuffle = (array: Cards) => {
    let m = array.length,
        t,
        i
    while (m) {
        i = Math.floor(Math.random() * m--)
        t = array[m]
        array[m] = array[i]
        array[i] = t
    }
    return array
}



export function getRandomCards(array: Cards, complexity: number) {
    shuffle(array)
    if (complexity === 1) {
        return shuffle([
            ...cloneDeep(array.slice(0, 3)),
            ...cloneDeep(array.slice(0, 3)),
        ])
    } else if (complexity === 2) {
        return shuffle([
            ...cloneDeep(array.slice(0, 6)),
            ...cloneDeep(array.slice(0, 6)),
        ])
    } else {
        return shuffle([
            ...cloneDeep(array.slice(0, 9)),
            ...cloneDeep(array.slice(0, 9)),
        ])
    }
}
