const  shuffle = (array) => {
    let m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

export function getRandomCards (array, complexity) {
    shuffle(array)
    if (complexity === "1") {
        return shuffle([...array.slice(0, 3), ...array.slice(0, 3)])
    } else if (complexity === "2") {
        return shuffle([...array.slice(0, 6), ...array.slice(1, 6)])
    } else {
        return shuffle([...array.slice(0, 9), ...array.slice(0, 9)])
    }
}